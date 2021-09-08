import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.SERVER_URI!}/graphql`,
});

export default client;
