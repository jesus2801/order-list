import { Profile as GoogleProfile } from 'passport-google-oauth20';
import { Profile as FacebookProfile } from 'passport-facebook';
import { generate } from 'short-uuid';
import v from 'validator';

import { LoginData, SignupData } from '@interfaces/schema/auth.interfaces';

import { comparePass, hashPass, isDuplicateErr } from '@functions/index';

import { ServiceError } from '@utils/handler.errors';
import errorMessages from '@utils/error.messages';

import authServices from './auth.services';

import UserModel, { AppProviders } from '@models/User.model';

// user services class
class UserServices {
  async login(data: LoginData) {
    //validate the pass
    if (data.pass.length < 6) throw new ServiceError(errorMessages.invalidPass);

    //search the user
    const user = await UserModel.findOne({
      $or: [{ userName: data.user }, { mail: data.user }],
      provider: 'local',
    });
    //if the user doesn't exist return an error
    if (!user) throw new ServiceError(errorMessages.invalidLogin);

    //validate password
    const validPass = await comparePass(data.pass, user.pass || '');
    if (!validPass) throw new ServiceError(errorMessages.invalidLogin);

    //return a signed token
    return authServices.signToken({
      id: user._id,
      mail: user.mail,
      user: user.userName,
      points: user.points,
    });
  }

  async signup(data: SignupData) {
    //validate email and pass
    if (!v.isEmail(data.mail)) throw new ServiceError(errorMessages.invalidMail);
    if (data.pass.length < 6) throw new ServiceError(errorMessages.invalidPass);

    try {
      //create user instance
      const user = new UserModel({
        mail: data.mail,
        userName: `user_${generate()}`,
        provider: 'local',
      });
      //add hash
      user.pass = await hashPass(data.pass);

      //save the user
      const insertedUser = await user.save();

      //return a signed token
      return authServices.signToken({
        id: insertedUser._id,
        mail: insertedUser.mail,
        user: insertedUser.userName,
        points: insertedUser.points,
      });
    } catch (e) {
      //handle the duplicate event
      if (isDuplicateErr(e)) throw new ServiceError(errorMessages.mailAlreadyUsed);
    }
  }

  async continueWith(
    provider: AppProviders,
    profile: GoogleProfile | FacebookProfile,
  ): Promise<string> {
    //search the user
    const user = await UserModel.findOne({ providerId: profile.id, provider });
    if (user) {
      //return a signed token
      return authServices.signToken({
        id: user._id,
        mail: user.mail,
        user: user.userName,
        points: user.points,
      });
    }

    //if the user doesn't exist, then we create a new user
    const newUser = new UserModel({
      mail: profile.emails ? profile.emails[0].value : undefined,
      providerId: profile.id,
      userName: `user_${generate()}`,
      provider: provider,
    });

    //save the new user
    const insertedUser = await newUser.save();
    //return a signed token
    return authServices.signToken({
      id: insertedUser._id,
      mail: insertedUser.mail,
      user: insertedUser.userName,
      points: insertedUser.points,
    });
  }
}

export default new UserServices();
