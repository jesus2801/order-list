import { rule, shield, allow } from 'graphql-shield';

import { handlerErrors, ServiceError } from '@utils/handler.errors';
import { GraphQLError } from 'graphql';

//rule for determinate if the user is authenticate
const isAuthenticate = rule({ cache: 'contextual' })(
  ({}, {}, ctx, {}) => ctx.user !== null,
);

// rules for whole querys and mutations
export default shield(
  {
    Mutation: {
      login: allow,
    },
  },
  {
    //fallback that runs when there is any error
    fallbackError: (e: any) => {
      //if the error is only a service error, we return the code
      if (e instanceof ServiceError) return new Error(e.code);

      if (e instanceof Error) {
        handlerErrors(e);
        //if the error is unknown, we return a graphql error
        return new GraphQLError('Internal server error');
      }

      //the default error means that the user doesn't have permissions
      return new Error('Forbidden');
    },
  },
);
