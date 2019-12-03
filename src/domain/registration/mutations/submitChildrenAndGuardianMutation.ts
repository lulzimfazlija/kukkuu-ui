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
        relationship {
          type
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
