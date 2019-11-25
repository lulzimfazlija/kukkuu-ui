import { gql } from 'apollo-boost';

const submitChildrenAndGuardianMutation = gql`
  mutation submitChildrenAndGuardian(
    $children: [ChildInput]
    $guardianFirstName: String!
    $guardianLastName: String!
    $email: String!
    $phoneNumber: String!
  ) {
    submitChildrenAndGuardian(
      input: {
        children: $children
        guardian: {
          lastName: $guardianLastName
          firstName: $guardianFirstName
          email: $email
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
        email
        phoneNumber
      }
    }
  }
`;

export default submitChildrenAndGuardianMutation;
