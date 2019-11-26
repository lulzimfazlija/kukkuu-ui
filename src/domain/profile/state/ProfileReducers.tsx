import { createReducer } from 'redux-starter-kit';

import ProfileValues from '../types/ProfileTypes';
import { PROFILE_ACTIONS } from '../constants/ProfileActionConstants';

export const defaultProfileValules: ProfileValues = {
  firstName: '',
};

export default createReducer(defaultProfileValules, {
  [PROFILE_ACTIONS.PROFILE_TO_STORE]: (state, action) =>
    Object.assign({}, state, { profileValues: action.payload }),
});
