import gql from 'graphql-tag';

export const childrenQuery = gql`
  query ChildrenQuery {
    children {
      edges {
        node {
          id
          createdAt
          updatedAt
          firstName
          lastName
          birthdate
          postalCode
          guardians {
            edges {
              node {
                id
              }
            }
          }
          relationships {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;

export const childByIdQuery = gql`
  query childByIdQuery($id: ID!) {
    child(id: $id) {
      id
      firstName
      lastName
      birthdate
      postalCode
      availableEvents {
        edges {
          node {
            id
            name
            shortDescription
            image
            participantsPerInvite
          }
        }
      }
      enrolments {
        edges {
          node {
            occurrence {
              id
              time
              venue {
                id
                name
                description
                address
              }
              event {
                id
                name
                shortDescription
                image
                duration
                participantsPerInvite
              }
            }
          }
        }
      }
      pastEvents {
        edges {
          node {
            id
            name
            shortDescription
            image
            participantsPerInvite
            occurrences {
              edges {
                node {
                  id
                  time
                }
              }
            }
          }
        }
      }
      relationships {
        edges {
          node {
            id
            type
          }
        }
      }
    }
  }
`;
