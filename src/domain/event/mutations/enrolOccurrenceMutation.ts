import gql from 'graphql-tag';

const enrolOccurrenceMutation = gql`
  mutation enrolOccurrenceMutation($input: EnrolOccurrenceMutationInput!) {
    enrolOccurrence(input: $input) {
      enrolment {
        child {
          firstName
        }
      }
    }
  }
`;

export default enrolOccurrenceMutation;
