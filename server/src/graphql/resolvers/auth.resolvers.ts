import { LoginInput } from '@interfaces/schema/auth.interfaces';
import userServices from '@services/user.services';

export default {
  Query: {
    async hello() {
      return 'lkadjf';
    },
  },
  Mutation: {
    async login({}, { input }: LoginInput) {
      return await userServices.login(input);
    },
  },
};
