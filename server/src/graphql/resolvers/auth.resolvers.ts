import { LoginInput, SignupInput } from '@interfaces/schema/auth.interfaces';
import { GraphqlCtx } from '@interfaces/index';

import userServices from '@services/user.services';

export default {
  Query: {
    async viewer({}, {}, { user }: GraphqlCtx) {
      return user;
    },
  },

  Mutation: {
    async login({}, { input }: LoginInput) {
      return await userServices.login(input);
    },

    async signup({}, { input }: SignupInput) {
      return await userServices.signup(input);
    },
  },
};
