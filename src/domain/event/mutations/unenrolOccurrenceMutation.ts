import gql from 'graphql-tag';

const unenrolOccurrenceMutation = gql`
  mutation unenrolOccurrenceMutation($input: UnenrolOccurrenceMutationInput!) {
    unenrolOccurrence(input: $input) {
      clientMutationId
      occurrence {
        id
        event {
          id
        }
      }
      child {
        id
        availableEvents {
          edges {
            node {
              id
            }
          }
        }
        enrolments {
          edges {
            node {
              occurrence {
                id
                event {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default unenrolOccurrenceMutation;
