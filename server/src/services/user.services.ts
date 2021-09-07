import { LoginData } from '@interfaces/schema/auth.interfaces';

import { ServiceError } from '@utils/handler.errors';
import errorMessages from '@utils/error.messages';

import { comparePass } from '@functions/index';

import UserModel from '@models/User.model';
import authServices from './auth.services';

class UserServices {
  async login(data: LoginData) {
    const user = await UserModel.findOne({ userName: data.user });
    if (!user) throw new ServiceError(errorMessages.invalidLogin);

    const validPass = comparePass(data.pass, user.pass);
    if (!validPass) throw new ServiceError(errorMessages.invalidLogin);

    return authServices.signToken({
      id: user._id,
      mail: user.mail,
      user: user.userName,
    });
  }
}

export default new UserServices();
