import gql from 'graphql-tag';

export default gql`
  type Query {
    hello: String!
  }

  type Mutation {
    login(input: LoginInput!): String!
    signup(input: SignupInput!): String!
  }

  input LoginInput {
    user: String!
    pass: String!
  }

  input SignupInput {
    mail: String!
    pass: String!
  }
`;
