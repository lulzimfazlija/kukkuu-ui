import { createAction } from '@reduxjs/toolkit';

import { ChildEnrolments } from '../type/EventChildTypes';
import { EVENT_ACTIONS } from '../constants/EventActionConstants';
import { profileQuery_myProfile_children as Children } from '../../api/generatedTypes/profileQuery';

const clearEvent = createAction(EVENT_ACTIONS.CLEAR_EVENT);
const saveChildEvents = createAction<ChildEnrolments>(
  EVENT_ACTIONS.SAVE_CHILD_EVENTS
);
const saveChildrenEvents = createAction<Children | undefined>(
  EVENT_ACTIONS.SAVE_CHILDREN_EVENTS
);
export { clearEvent, saveChildEvents, saveChildrenEvents };
