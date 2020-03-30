import { createAction } from '@reduxjs/toolkit';

import { ChildEvent } from '../type/EventChildTypes';
import { EVENT_ACTIONS } from '../constants/EventActionConstants';
import { profileQuery_myProfile_children as Children } from '../../api/generatedTypes/profileQuery';

const clearEvent = createAction(EVENT_ACTIONS.CLEAR_EVENT);
const enrolChild = createAction<ChildEvent>(EVENT_ACTIONS.ENROL_CHILD);
const unenrolChild = createAction<ChildEvent>(EVENT_ACTIONS.UNENROL_CHILD);
const saveChildEvent = createAction<Children>(EVENT_ACTIONS.SAVE_CHILD_EVENT);

export { clearEvent, enrolChild, unenrolChild, saveChildEvent };
