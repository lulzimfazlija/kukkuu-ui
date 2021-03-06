import { StoreState } from '../../app/types/AppTypes';

export const userAccessTokenSelector = (state: StoreState) =>
  state.authentication.tunnistamo.user?.access_token;

export const apiTokenSelector = (state: StoreState) =>
  state.authentication.backend.apiToken;

export const isLoadingUserSelector = (state: StoreState) =>
  state.authentication.tunnistamo.isLoadingUser ||
  state.authentication.backend.isFetchingToken;

export const isAuthenticatedSelector = (state: StoreState) =>
  !!state.authentication.backend.apiToken;

export const userSelector = (state: StoreState) =>
  state.authentication.tunnistamo.user;
