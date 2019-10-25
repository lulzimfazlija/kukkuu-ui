import { configureStore } from 'redux-starter-kit';
import { loadUser } from 'redux-oidc';

import userManager from '../../auth/userManager';
import rootReducer from './AppReducers';
const store = configureStore({ devTools: true, reducer: rootReducer });

loadUser(store, userManager);

export default store;
