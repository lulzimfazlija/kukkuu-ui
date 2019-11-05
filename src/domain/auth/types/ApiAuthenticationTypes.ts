export type ApiAuthenticationData = {
  isFetchingToken: boolean;
  isAuthenticated: boolean;
  apiToken: string | null;
  errors: object;
};
