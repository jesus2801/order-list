import { mergeResolvers } from '@graphql-tools/merge';

//import all app resolvers
import authResolvers from './auth.resolvers';

// do a merge for whole resolvers and export they
export default mergeResolvers([authResolvers]);
