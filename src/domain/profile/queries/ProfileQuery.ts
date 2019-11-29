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
          children {
            edges {
              node {
                id
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
