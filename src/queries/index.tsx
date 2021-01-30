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

const GET_VISIT = gql`
  query GetVisit($id: Int!) {
    visit(id: $id) {
      agencyUserId
      createdAt
      releasedAt
      matchedAt
      startedAt
      finishedAt
      cancelledAt
      notes
      baseFee
      client {
        fullName
      }
      services {
        fee
        name
        id
        serviceId
      }
      agencyUser {
        id
        user {
          fullName
          phoneNumber
        }
      }
    }
  }
`;

const RELEASE_VISIT = gql`
  mutation ReleaseVisit($id: ID!) {
    releaseVisit(id: $id) {
      id
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

const GET_SERVICES = gql`
  query GetServices {
    services {
      id
      name
      fee
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

const DRAFT_VISIT = gql`
  mutation DraftVisit($input: VisitInput!) {
    draftVisit(input: $input) {
      id
    }
  }
`;

export {
  GET_ACTIVE_VISITS,
  GET_VISIT,
  RELEASE_VISIT,
  GET_MY_USER,
  GET_SERVICES,
  UPDATE_MY_USER,
  SAVE_MY_CARD,
  DRAFT_VISIT,
};
