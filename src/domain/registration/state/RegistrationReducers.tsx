import { Record } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  RegistrationState,
  RegistrationProps,
  RegistrationFormValues,
} from '../types/RegistrationTypes';
import { REGISTRATION_ACTIONS } from '../constants/RegistrationActionConstants';

const defaultFormValues = Record<RegistrationFormValues>({
  childBirthday: '',
  childHomeCity: '',
  verifyInformation: false,
});
export const defaultRegistrationData = Record<RegistrationProps>({
  formValues: defaultFormValues(),
});

export default handleActions<RegistrationState>(
  {
    [REGISTRATION_ACTIONS.SET_FORM_VALUES]: (state, action) =>
      state.setIn('formValues', action.payload),
    [REGISTRATION_ACTIONS.RESET_FORM_VALUES]: state =>
      state.mergeIn('formValues', defaultRegistrationData().formValues),
  },
  defaultRegistrationData()
);
