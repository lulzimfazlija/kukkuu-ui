import { createAction } from 'redux-starter-kit';

import { PROFILE_ACTIONS } from '../constants/ProfileActionConstants';

const fetchProfile = createAction(PROFILE_ACTIONS.LOAD_PROFILE);

export { fetchProfile };
