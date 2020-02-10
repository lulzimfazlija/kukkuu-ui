import { RegistrationFormValues } from '../../registration/types/RegistrationTypes';
import { HomeFormValues } from './types/HomeFormTypes';
import { getChildFormBirthdateData } from '../../child/ChildUtils';

/**
 * Convert FormValues fetched from state to initialValues used by formik
 * @param {RegistrationFormValues} stateFormValues Values from state.
 * @returns {HomeFormValues} initialValues used in form.
 */
export const convertFormValues = (
  stateFormValues: RegistrationFormValues
): HomeFormValues => {
  if (stateFormValues.children[0].birthdate) {
    const childBirthdate = getChildFormBirthdateData(
      stateFormValues.children[0].birthdate
    );
    return {
      child: {
        birthdate: childBirthdate,
        homeCity: stateFormValues.children[0].homeCity,
      },
      verifyInformation: stateFormValues.verifyInformation,
    };
  }
  return {
    child: {
      birthdate: {
        day: '',
        month: '',
        year: '',
      },
      homeCity: '',
    },
    verifyInformation: false,
  };
};
