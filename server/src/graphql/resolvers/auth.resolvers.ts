import { LoginInput } from '@interfaces/schema/auth.interfaces';

export default {
  Query: {
    async hello() {
      return 'lkadjf';
    },
  },
  Mutation: {
    async login({}, { input: { pass, user } }: LoginInput) {
      return 'Hello world' + user + pass;
    },
  },
};
