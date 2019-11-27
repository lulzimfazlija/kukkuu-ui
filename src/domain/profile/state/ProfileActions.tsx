import { createAction } from 'redux-starter-kit';

import { PROFILE_ACTIONS } from '../constants/ProfileActionConstants';
import { GuardianValues } from '../types/ProfileTypes';

const profileToStore = createAction<GuardianValues>(
  PROFILE_ACTIONS.PROFILE_TO_STORE
);

export { profileToStore };
