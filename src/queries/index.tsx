import { gql } from '@apollo/client';

const GET_ACTIVE_VISITS = gql`
  query GetActiveVisits {
    activeVisits {
      id
      client {
        id
        fullName
      }
      services {
        id
        serviceId
        name
        fee
      }
      createdAt
      releasedAt
      matchedAt
      startedAt
      finishedAt
    }
  }
`;

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

export { GET_ACTIVE_VISITS, GET_MY_USER };
