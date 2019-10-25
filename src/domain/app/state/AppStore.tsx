import { configureStore, getDefaultMiddleware, Store } from 'redux-starter-kit';
import { loadUser, USER_FOUND } from 'redux-oidc';

import userManager from '../../auth/userManager';
import rootReducer from './AppReducers';

const store: Store = configureStore({
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [USER_FOUND],
    },
  }),
  reducer: rootReducer,
});

loadUser(store, userManager);

export default store;
