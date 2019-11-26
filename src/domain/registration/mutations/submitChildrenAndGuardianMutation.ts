import { gql } from 'apollo-boost';

const submitChildrenAndGuardianMutation = gql`
  mutation submitChildrenAndGuardian(
    $children: [ChildInput]
    $guardianFirstName: String!
    $guardianLastName: String!
    $phoneNumber: String!
  ) {
    submitChildrenAndGuardian(
      input: {
        children: $children
        guardian: {
          lastName: $guardianLastName
          firstName: $guardianFirstName
          phoneNumber: $phoneNumber
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
      }
    }
  }
`;

export default submitChildrenAndGuardianMutation;
