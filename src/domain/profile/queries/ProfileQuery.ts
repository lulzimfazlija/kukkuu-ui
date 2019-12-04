import { gql } from 'apollo-boost';

const profileQuery = gql`
  query profileQuery {
    guardians {
      edges {
        node {
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
                relationships {
                  edges {
                    node {
                      type
                    }
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
