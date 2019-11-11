import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { SubmitChildValues } from '../types/RegistrationTypes';
import { submitChild } from '../../api/generatedTypes/submitChild';
/*
import {
  submitChild,
  submitChild_submitChild,
  submitChild_submitChild_child,
} from '../../../domain/api/generatedTypes/submitChild';

*/
const submitChildMutationQuery = gql`
  mutation submitChild(
    $birthdate: Date!
    $firstName: String
    $lastName: String
    $guardianFirstName: String!
    $guardianLastName: String!
    $email: String!
  ) {
    submitChild(
      input: {
        child: {
          birthdate: $birthdate
          firstName: $firstName
          lastName: $lastName
        }
        guardian: {
          lastName: $guardianLastName
          firstName: $guardianFirstName
          email: $email
        }
      }
    ) {
      child {
        birthdate
        firstName
        lastName
      }
      guardian {
        firstName
        lastName
        email
      }
    }
  }
`;

export default submitChildMutationQuery;
