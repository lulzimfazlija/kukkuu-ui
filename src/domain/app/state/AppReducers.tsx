import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';

import registrationReducer from '../../registration/state/RegistrationReducers';
export default combineReducers({
  oidc: oidcReducer,
  registration: registrationReducer,
});
