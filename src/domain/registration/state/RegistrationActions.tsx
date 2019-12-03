import { createAction } from 'redux-starter-kit';

import { REGISTRATION_ACTIONS } from '../constants/RegistrationActionConstants';
import { HomeFormPayload } from '../../home/form/types/HomeFormTypes';

const setFormValues = createAction(REGISTRATION_ACTIONS.SET_FORM_VALUES);

const setHomeFormValues = createAction<HomeFormPayload>(
  REGISTRATION_ACTIONS.SET_HOME_FORM_VALUES
);

const resetFormValues = createAction(REGISTRATION_ACTIONS.RESET_FORM_VALUES);

export { setFormValues, resetFormValues, setHomeFormValues };
