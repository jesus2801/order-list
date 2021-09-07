import { generate } from 'short-uuid';
import v from 'validator';
import mongoose from 'mongoose';

import { LoginData, SignupData } from '@interfaces/schema/auth.interfaces';

import { ServiceError } from '@utils/handler.errors';
import errorMessages from '@utils/error.messages';

import { comparePass, hashPass, isDuplicateErr } from '@functions/index';

import authServices from './auth.services';
import UserModel from '@models/User.model';

class UserServices {
  async login(data: LoginData) {
    const user = await UserModel.findOne({
      $or: [{ userName: data.user }, { mail: data.user }],
    });
    if (!user) throw new ServiceError(errorMessages.invalidLogin);

    const validPass = await comparePass(data.pass, user.pass);
    if (!validPass) throw new ServiceError(errorMessages.invalidLogin);

    return authServices.signToken({
      id: user._id,
      mail: user.mail,
      user: user.userName,
    });
  }

  async signup(data: SignupData) {
    if (!v.isEmail(data.mail)) throw new ServiceError(errorMessages.invalidMail);
    if (data.pass.length < 6) throw new ServiceError(errorMessages.invalidPass);

    try {
      const user = new UserModel({
        mail: data.mail,
        userName: `user_${generate()}`,
      });
      user.pass = await hashPass(data.pass);

      const insertedUser = await user.save();

      return authServices.signToken({
        id: insertedUser._id,
        mail: insertedUser.mail,
        user: insertedUser.userName,
      });
    } catch (e) {
      if (isDuplicateErr(e)) throw new ServiceError(errorMessages.mailAlreadyUsed);
    }
  }
}

export default new UserServices();
