import { createAction } from 'redux-actions';

import { REGISTRATION_ACTIONS } from '../constants/RegistrationActionConstants';
import { RegistrationFormValues } from '../types/\u001DRegistrationTypes';

const setFormValues = createAction(
  REGISTRATION_ACTIONS.SET_FORM_VALUES,
  (values: RegistrationFormValues) => values
);

const resetFormValues = createAction(REGISTRATION_ACTIONS.RESET_FORM_VALUES);

export { setFormValues, resetFormValues };
