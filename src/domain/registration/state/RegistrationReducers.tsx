import { Record } from 'immutable';
import { handleActions } from 'redux-actions';

import {
  RegistrationFactory,
  RegistrationState,
} from '../types/RegistrationTypes';
import { REGISTRATION_ACTIONS } from '../constants/RegistrationActionConstants';

const defaultState: RegistrationFactory = Record({
  formValues: {
    socialSecurityId: '',
  },
});

export default handleActions<RegistrationState>(
  {
    [REGISTRATION_ACTIONS.SET_FORM_VALUES]: (state, action) =>
      state.mergeIn('formValues', action.payload),
    [REGISTRATION_ACTIONS.RESET_FORM_VALUES]: state =>
      state.mergeIn('formValues', defaultState().formValues),
  },
  defaultState()
);
