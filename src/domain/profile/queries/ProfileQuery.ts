import gql from 'graphql-tag';

const profileQuery = gql`
  query profileQuery {
    myProfile {
      id
      firstName
      lastName
      email
      phoneNumber
      language
      children {
        edges {
          node {
            id
            firstName
            lastName
            birthdate
            postalCode
            project {
              id
              year
            }
            relationships {
              edges {
                node {
                  id
                  type
                }
              }
            }
            availableEvents {
              edges {
                node {
                  id
                  name
                  duration
                  participantsPerInvite
                }
              }
            }
            occurrences {
              edges {
                node {
                  id
                  event {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default profileQuery;
