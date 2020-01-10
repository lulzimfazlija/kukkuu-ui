import { combineReducers } from '@reduxjs/toolkit';

import authenticationReducers from '../../auth/state/AuthenticationReducers';
import profileReducer from '../../profile/state/ProfileReducers';
import registrationReducer from '../../registration/state/RegistrationReducers';

export default combineReducers({
  authentication: authenticationReducers,
  registration: registrationReducer,
  profile: profileReducer,
});
