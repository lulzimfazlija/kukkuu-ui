import { StoreState } from '../../app/types/stateTypes';

export const idTokenSelector = (state: StoreState) =>
  state.authentication.api.apiToken;

export const isLoadingUserSelector = (state: StoreState) =>
  state.authentication.tunnistamo.isLoadingUser &&
  state.authentication.api.isFetchingToken;

export const isAuthenticatedSelector = (state: StoreState) =>
  state.authentication.api.isAuthenticated;
