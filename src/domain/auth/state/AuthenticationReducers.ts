import { reducer as oidcReducer } from 'redux-oidc';
import { combineReducers } from 'redux';

import apiAuthenticationReducer from './ApiAuthenticationReducer';

export default combineReducers({
  tunnistamo: oidcReducer,
  api: apiAuthenticationReducer,
});
