import { createAction } from 'redux-starter-kit';

import { REGISTRATION_ACTIONS } from '../constants/RegistrationActionConstants';
import { Child } from '../../child/types/ChildTypes';

const setFormValues = createAction(REGISTRATION_ACTIONS.SET_FORM_VALUES);

const resetFormValues = createAction(REGISTRATION_ACTIONS.RESET_FORM_VALUES);

const addChildToFormValues = createAction<Child>(
  REGISTRATION_ACTIONS.ADD_CHILD
);

const deleteChildFromFormValues = createAction<number>(
  REGISTRATION_ACTIONS.DELETE_CHILD
);

export {
  setFormValues,
  resetFormValues,
  addChildToFormValues,
  deleteChildFromFormValues,
};
