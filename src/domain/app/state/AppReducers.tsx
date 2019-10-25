import { combineReducers } from 'redux-starter-kit';

import registrationReducer from '../../registration/state/RegistrationReducers';
export default combineReducers({ registration: registrationReducer });
