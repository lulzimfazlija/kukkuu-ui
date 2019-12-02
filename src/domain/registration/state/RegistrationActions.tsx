import { createAction } from 'redux-starter-kit';

import { REGISTRATION_ACTIONS } from '../constants/RegistrationActionConstants';
import { Child } from '../../child/types/ChildTypes';
import { HomeFormPayload } from '../../home/form/types/HomeFormTypes';

const setFormValues = createAction(REGISTRATION_ACTIONS.SET_FORM_VALUES);

const setHomeFormValues = createAction<HomeFormPayload>(
  REGISTRATION_ACTIONS.SET_HOME_FORM_VALUES
);

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
  setHomeFormValues,
};
