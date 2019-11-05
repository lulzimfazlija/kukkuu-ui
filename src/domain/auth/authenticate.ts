
import userManager from './userManager';
import { StoreThunk } from '../app/types/AppTypes';
import { startFetchingToken } from './state/ApiAuthenticationActions';
import axios from 'axios';

export default function(): void {
  userManager.signinRedirect();
}

export const authenticateWithBackend = (): StoreThunk => async dispatch => {
  try {
    dispatch(startFetchingToken());

    const token = await axios
  }
}