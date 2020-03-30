import { createReducer } from '@reduxjs/toolkit';

import { EVENT_ACTIONS } from '../constants/EventActionConstants';
import { ChildEvent } from '../type/EventChildTypes';
import { profileQuery_myProfile_children_edges as edges } from '../../api/generatedTypes/profileQuery';

export const defaultChildEventData: ChildEvent[] = [];

export default createReducer(defaultChildEventData, {
  [EVENT_ACTIONS.CLEAR_EVENT]: (state) => (state = defaultChildEventData),
  [EVENT_ACTIONS.ENROL_CHILD]: (state, action) => {
    const item: ChildEvent = {
      childId: action.payload.childId,
      eventId: action.payload.eventId,
    };
    state.push(item);
  },
  [EVENT_ACTIONS.UNENROL_CHILD]: (state, action) => {
    return state.filter((entry) => {
      return entry.childId !== action.payload.childId &&
        entry.eventId !== action.payload.eventId
        ? entry
        : undefined;
    });
  },
  [EVENT_ACTIONS.SAVE_CHILD_EVENT]: (state, action) => {
    action.payload.edges.map((childEdge: edges) => {
      const childId = childEdge?.node?.id;
      childEdge?.node?.enrolments.edges.map((enrolEdge) => {
        if (childId && enrolEdge?.node?.occurrence.event.id) {
          state.push({
            childId: childId,
            eventId: enrolEdge?.node?.occurrence.event.id,
          });
        }
      });
    });
  },
});
