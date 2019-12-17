import { gql } from 'apollo-boost';

const submitChildrenAndGuardianMutation = gql`
  mutation submitChildrenAndGuardian(
    $children: [ChildInput!]!
    $guardian: GuardianInput!
  ) {
    submitChildrenAndGuardian(
      input: { children: $children, guardian: $guardian }
    ) {
      children {
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
      guardian {
        id
        firstName
        lastName
        email
        phoneNumber
        language
      }
    }
  }
`;

export default submitChildrenAndGuardianMutation;
