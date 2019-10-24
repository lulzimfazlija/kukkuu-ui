import { Record } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  RegistrationState,
  RegistrationProps,
} from '../types/RegistrationTypes';
import { REGISTRATION_ACTIONS } from '../constants/RegistrationActionConstants';

export const defaultRegistrationData = Record<RegistrationProps>({
  formValues: {
    childBirthday: '',
    childHomeCity: '',
    verifyInformation: false,
  },
});

export default handleActions<RegistrationState>(
  {
    [REGISTRATION_ACTIONS.SET_FORM_VALUES]: (state, action) =>
      state.mergeIn('formValues', action.payload),
    [REGISTRATION_ACTIONS.RESET_FORM_VALUES]: state =>
      state.mergeIn('formValues', defaultRegistrationData().formValues),
  },
  defaultRegistrationData()
);
