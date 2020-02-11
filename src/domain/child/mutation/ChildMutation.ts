import gql from 'graphql-tag';

export const addChildMutation = gql`
  mutation addNewChild($input: AddChildMutationInput!) {
    addChild(input: $input) {
      child {
        firstName
        lastName
        birthdate
        postalCode
      }
    }
  }
`;

export const deleteChildMutation = gql`
  mutation deleteChild($input: DeleteChildMutationInput!) {
    deleteChild(input: $input) {
      clientMutationId
    }
  }
`;
