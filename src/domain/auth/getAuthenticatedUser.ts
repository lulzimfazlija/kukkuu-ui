import { User } from 'oidc-client';
import { toast } from 'react-toastify';

import userManager from './userManager';

export default function(): Promise<User> {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await userManager.getUser();
      if (user) {
        resolve(user);
      } else {
        toast('An error occured, please try again later');
        console.error('getAuthenticatedUser user unset');
        reject();
      }
    } catch (error) {
      toast('An error occured, please try again later');
      console.error('getAuthenticatedUser await catch error');
    }
  });
}
