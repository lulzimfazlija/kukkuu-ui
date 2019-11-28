import { gql } from 'apollo-boost';

const profileQuery = gql`
  query profileQuery {
    guardians {
      edges {
        node {
          firstName
          lastName
          email
          phoneNumber
          children {
            edges {
              node {
                firstName
                lastName
                birthdate
              }
            }
          }
        }
      }
    }
  }
`;
export default profileQuery;
