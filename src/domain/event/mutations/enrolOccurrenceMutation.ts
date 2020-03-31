import gql from 'graphql-tag';

const enrolOccurrenceMutation = gql`
  mutation enrolOccurrenceMutation($input: EnrolOccurrenceMutationInput!) {
    enrolOccurrence(input: $input) {
      clientMutationId
      enrolment {
        id
        occurrence {
          id
          event {
            id
          }
          venue {
            id
          }
        }
        child {
          id
        }
      }
    }
  }
`;

export default enrolOccurrenceMutation;
