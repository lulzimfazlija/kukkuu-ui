import axios from 'axios';
import { loadUser } from 'redux-oidc';

import { store } from '../app/state/AppStore';
import { TUNNISTAMO_API_TOKEN_ENDPOINT } from './constants/ApiConstants';
import { userAccessTokenSelector } from '../auth/state/AuthenticationSelectors';
import {
  startFetchingToken,
  fetchTokenError,
  fetchTokenSuccess,
  tokenFetched,
} from '../auth/state/BackendAuthenticationActions';
import { BackendTokenResponse } from '../auth/types/BackendAuthenticationTypes';
import userManager from '../auth/userManager';

type CustomPromise = null | Promise<BackendTokenResponse>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customFetch = async (uri: any, options: any) => {
  let customPromise: CustomPromise = null;
  const state = store.getState();
  const accessToken = userAccessTokenSelector(state);

  const testAuthRequest = fetch(uri, options);

  const errorHandler = (error: Error) => {
    store.dispatch(fetchTokenError(error));
    return fetch(uri, options);
  };

  const successHandler = (data: BackendTokenResponse) => {
    store.dispatch(fetchTokenSuccess(data));
    return fetch(uri, options);
  };

  try {
    const user = await loadUser(store, userManager);
    if (user?.access_token) {
      store.dispatch(startFetchingToken());

      return testAuthRequest
        .then(response => response.json())
        .then(data => {
          if (data.errors) {
            if (!customPromise) {
              customPromise = axios
                .post(
                  TUNNISTAMO_API_TOKEN_ENDPOINT,
                  {},
                  {
                    headers: {
                      Authorization: `bearer ${accessToken}`,
                    },
                  }
                )
                .then(response => {
                  return response.data;
                })
                .catch(error => {
                  return errorHandler(error);
                });
            }

            return customPromise.then(apiToken => {
              customPromise = null;

              return successHandler(apiToken);
            });
          }

          store.dispatch(tokenFetched());
          return fetch(uri, options);
        })
        .catch(error => {
          return errorHandler(error);
        });
    } else {
      return errorHandler({
        name: 'fetchTokenError',
        message: 'No access token',
      });
    }
  } catch (error) {
    return errorHandler(error);
  }
};

export default customFetch;
