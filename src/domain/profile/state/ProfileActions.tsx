import { createAction } from 'redux-starter-kit';

import { PROFILE_ACTIONS } from '../constants/ProfileActionConstants';

const profileToStore = createAction(PROFILE_ACTIONS.PROFILE_TO_STORE);

export { profileToStore };
