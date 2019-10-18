import { combineReducers } from 'redux';

import registrationReducer from '../../registration/state/RegistrationReducers';
export default combineReducers({ registration: registrationReducer });
