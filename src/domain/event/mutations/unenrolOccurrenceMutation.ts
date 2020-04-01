import gql from 'graphql-tag';

const unenrolOccurrenceMutation = gql`
  mutation unenrolOccurrenceMutation($input: UnenrolOccurrenceMutationInput!) {
    unenrolOccurrence(input: $input) {
      clientMutationId
    }
  }
`;

export default unenrolOccurrenceMutation;
