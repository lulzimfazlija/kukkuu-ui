import { createReducer } from 'redux-starter-kit';

//import { string } from 'prop-types';
import ProfileValues from '../types/ProfileTypes';
import { PROFILE_ACTIONS } from '../constants/ProfileActionConstants';

export const defaultProfileValules: ProfileValues = {
  firstName: '',
};

export default createReducer(defaultProfileValules, {
  [PROFILE_ACTIONS.LOAD_PROFILE]: (state, action) =>
    Object.assign({}, state, { profileValues: action.payload }),
});
