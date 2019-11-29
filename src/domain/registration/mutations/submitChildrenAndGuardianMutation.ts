import { gql } from 'apollo-boost';

const submitChildrenAndGuardianMutation = gql`
  mutation submitChildrenAndGuardian(
    $children: [ChildInput]
    $guardianFirstName: String!
    $guardianLastName: String!
    $phoneNumber: String!
    $language: Language!
  ) {
    submitChildrenAndGuardian(
      input: {
        children: $children
        guardian: {
          lastName: $guardianLastName
          firstName: $guardianFirstName
          phoneNumber: $phoneNumber
          language: $language
        }
      }
    ) {
      children {
        birthdate
        firstName
        lastName
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
