import { configureStore, getDefaultMiddleware, Store } from 'redux-starter-kit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { USER_FOUND } from 'redux-oidc';

import rootReducer from './AppReducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['registration'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store = configureStore({
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [USER_FOUND, 'persist/PERSIST'],
    },
  }),
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { persistor, store };
