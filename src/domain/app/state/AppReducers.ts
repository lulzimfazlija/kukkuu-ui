import { combineReducers } from 'redux-starter-kit';

import registrationReducer from '../../registration/state/RegistrationReducers';
import authenticationReducers from '../../auth/state/AuthenticationReducers';
import profileReducer from '../../profile/state/ProfileReducers';

export default combineReducers({
  authentication: authenticationReducers,
  registration: registrationReducer,
  profile: profileReducer,
});
