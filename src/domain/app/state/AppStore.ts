import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './AppReducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['profile', 'registration'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store = configureStore({
  devTools: true,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { persistor, store };
