import { createReducer } from 'redux-starter-kit';

import { RegistrationData } from '../types/RegistrationTypes';
import { REGISTRATION_ACTIONS } from '../constants/RegistrationActionConstants';

export const defaultRegistrationData: RegistrationData = {
  formValues: {
    children: [
      {
        birthdate: '',
        firstName: '',
        homeCity: '',
        lastName: '',
        postalCode: '',
      },
    ],
    guardian: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      relationship: '',
    },
    preferLanguage: '',
    agree: false,
    verifyInformation: false,
  },
};

export default createReducer(defaultRegistrationData, {
  [REGISTRATION_ACTIONS.SET_FORM_VALUES]: (state, action) =>
    Object.assign({}, state, { formValues: action.payload }),
  [REGISTRATION_ACTIONS.RESET_FORM_VALUES]: state =>
    Object.assign({}, state, {
      formValues: defaultRegistrationData.formValues,
    }),
  [REGISTRATION_ACTIONS.ADD_CHILD]: (state, action) => {
    const newFormValues = Object.assign({}, state.formValues, {
      children: state.formValues.children.push(action.payload),
    });

    return Object.assign({}, state, { formValues: newFormValues });
  },
});
