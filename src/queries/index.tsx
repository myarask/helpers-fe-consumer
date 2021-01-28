import { gql } from '@apollo/client';

const GET_MY_USER = gql`
  query GetMyUser {
    myUser {
      id
      customerId
      fullName
      phoneNumber
      clients {
        id
        fullName
        approvedAt
      }
    }
  }
`;

export { GET_MY_USER };
