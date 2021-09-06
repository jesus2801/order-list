import { mergeTypeDefs } from '@graphql-tools/merge';
import { print } from 'graphql';

import auth from '@schema/auth.schema';

// leo todos los archivos de schemas y luego los uno
export default print(mergeTypeDefs([auth]));
