import {
  RegistrationFormValues,
  SubmitChildValues,
} from '../types/RegistrationTypes';

/**
 * Convert FormValues from RegistrationForm to childMutation
 * @param {RegistrationFormValues} stateFormValues Values from state.
 * @returns {HomeFormValues} initialValues used in form.
 */
export const convertFormValuesToSubmitChildMutation = (
  stateFormValues: RegistrationFormValues
): SubmitChildValues => {
  return {
    birthdate: '2019-10-13',
    firstName: 'a',
    lastName: 'b',
    guardianFirstName: 'c',
    guardianLastName: 'd',
    email: 'e',
  };
};
