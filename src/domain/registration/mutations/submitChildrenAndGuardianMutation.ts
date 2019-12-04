import { gql } from 'apollo-boost';

const submitChildrenAndGuardianMutation = gql`
  mutation submitChildrenAndGuardian(
    $children: [ChildInput]
    $guardian: GuardianInput!
  ) {
    submitChildrenAndGuardian(
      input: { children: $children, guardian: $guardian }
    ) {
      children {
        birthdate
        firstName
        lastName
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
        firstName
        lastName
        phoneNumber
        language
      }
    }
  }
`;

export default submitChildrenAndGuardianMutation;
