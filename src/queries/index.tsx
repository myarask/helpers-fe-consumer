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

const UPDATE_MY_USER = gql`
  mutation UpdateMyUser($fullName: String!, $phoneNumber: String) {
    updateMyUser(fullName: $fullName, phoneNumber: $phoneNumber) {
      id
    }
  }
`;

const SAVE_MY_CARD = gql`
  mutation SaveMyCard($paymentMethodId: String!) {
    saveMyCard(paymentMethodId: $paymentMethodId)
  }
`;

export { GET_ACTIVE_VISITS, GET_MY_USER, UPDATE_MY_USER, SAVE_MY_CARD };
