import { reducer as oidcReducer } from 'redux-oidc';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import backendAuthenticationReducer from './BackendAuthenticationReducer';

const backendPersistConfig = {
  key: 'backendPersistor',
  storage,
  whitelist: ['apiToken'],
};

export default combineReducers({
  tunnistamo: oidcReducer,
  backend: persistReducer(backendPersistConfig, backendAuthenticationReducer),
});
