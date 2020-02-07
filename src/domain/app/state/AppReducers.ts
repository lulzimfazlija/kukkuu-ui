import { combineReducers } from '@reduxjs/toolkit';

import authenticationReducers from '../../auth/state/AuthenticationReducers';
import profileReducer from '../../profile/state/ProfileReducers';
import registrationReducer from '../../registration/state/RegistrationReducers';
import uiReducers from './ui/UIReducers';

export default combineReducers({
  authentication: authenticationReducers,
  registration: registrationReducer,
  profile: profileReducer,
  ui: uiReducers,
});
