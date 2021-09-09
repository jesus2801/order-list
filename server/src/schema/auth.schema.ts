import gql from 'graphql-tag';

export default gql`
  type Query {
    viewer: UserPayload
  }

  type Mutation {
    login(input: LoginInput!): String!
    signup(input: SignupInput!): String!
  }

  type UserPayload {
    id: ID!
    mail: String!
    user: String!
    points: Float!
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
