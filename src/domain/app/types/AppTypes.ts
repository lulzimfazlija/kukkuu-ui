import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer from '../state/AppReducers';

export type StoreState = ReturnType<typeof rootReducer>;

export type StoreThunk = ThunkAction<void, StoreState, null, Action<string>>;
