import { createAction } from 'redux-starter-kit';

import { PROFILE_ACTIONS } from '../constants/ProfileActionConstants';
import { Profile } from '../type/ProfileTypes';

const saveProfile = createAction<Profile>(PROFILE_ACTIONS.SAVE_PROFILE);

const clearProfile = createAction(PROFILE_ACTIONS.CLEAR_PROFILE);

export { saveProfile, clearProfile };
