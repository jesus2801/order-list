import { generate } from 'short-uuid';
import v from 'validator';

import { LoginData, SignupData } from '@interfaces/schema/auth.interfaces';

import { comparePass, hashPass, isDuplicateErr } from '@functions/index';

import { ServiceError } from '@utils/handler.errors';
import errorMessages from '@utils/error.messages';

import authServices from './auth.services';

import UserModel from '@models/User.model';

// user services class
class UserServices {
  async login(data: LoginData) {
    //validate the pass
    if (data.pass.length < 6) throw new ServiceError(errorMessages.invalidPass);

    //search the user
    const user = await UserModel.findOne({
      $or: [{ userName: data.user }, { mail: data.user }],
    });
    //if the user doesn't exist return an error
    if (!user) throw new ServiceError(errorMessages.invalidLogin);

    //validate password
    const validPass = await comparePass(data.pass, user.pass);
    if (!validPass) throw new ServiceError(errorMessages.invalidLogin);

    //return a signed token
    return authServices.signToken({
      id: user._id,
      mail: user.mail,
      user: user.userName,
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
      });
    } catch (e) {
      //handle the duplicate event
      if (isDuplicateErr(e)) throw new ServiceError(errorMessages.mailAlreadyUsed);
    }
  }
}

export default new UserServices();
