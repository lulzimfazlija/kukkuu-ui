import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import userManager from './userManager';
import { StoreThunk } from '../app/types/AppTypes';
import {
  startFetchingToken,
  fetchTokenSuccess,
  fetchTokenError,
} from './state/BackendAuthenticationActions';
import { TUNNISTAMO_API_TOKEN_ENDPOINT } from '../api/constants/ApiConstants';
import { BackendTokenResponse } from './types/BackendAuthenticationTypes';

export const loginTunnistamo = (path?: string) => {
  userManager
    .signinRedirect(
      path ? { data: { path: path } } : { data: { path: '/profile' } }
    )
    .catch(error => {
      let message = 'Login error';
      if (error.message === 'Network Error')
        message =
          'Login error: Check your network connection or try again later';
      toast(message);
    });
};

export const logoutTunnistamo = (path?: string) => {
  userManager.signoutRedirect(path ? { data: { path: path } } : {});
};

export const authenticateWithBackend = (
  accessToken: string
): StoreThunk => async dispatch => {
  try {
    dispatch(startFetchingToken());

    const res: AxiosResponse<BackendTokenResponse> = await axios.post(
      TUNNISTAMO_API_TOKEN_ENDPOINT,
      {},
      {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      }
    );

    dispatch(fetchTokenSuccess(res.data));
  } catch (error) {
    toast('Failed to get API-token');
    console.error('authenticate.ts Failed to get API-token');
    console.error(error);
    dispatch(fetchTokenError(error));
  }
};
