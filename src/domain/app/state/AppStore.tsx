import { configureStore } from 'redux-starter-kit';

import rootReducer from './AppReducers';
const store = configureStore({ devTools: true, reducer: rootReducer });

export default store;
