import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { loadUser } from 'redux-oidc';

import userManager from '../../auth/userManager';
import rootReducer from './AppReducers';
const store = createStore(rootReducer, devToolsEnhancer({}));

loadUser(store, userManager);

export default store;
