import { createAction } from 'redux-starter-kit';

import { REGISTRATION_ACTIONS } from '../constants/RegistrationActionConstants';

const setFormValues = createAction(REGISTRATION_ACTIONS.SET_FORM_VALUES);

const resetFormValues = createAction(REGISTRATION_ACTIONS.RESET_FORM_VALUES);

export { setFormValues, resetFormValues };
