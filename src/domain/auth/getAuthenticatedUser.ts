import { User } from 'oidc-client';
import { toast } from 'react-toastify';
import * as Sentry from '@sentry/browser';

import i18n from '../../common/translation/i18n/i18nInit';
import userManager from './userManager';

export default function(): Promise<User> {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await userManager.getUser();
      if (user) {
        resolve(user);
      } else {
        // TODO: Find out if it is a problem if this happens. The console.error is here to
        // help us see if it happens.
        Sentry.captureMessage('getAuthenticatedUser user unset');
        // eslint-disable-next-line no-console
        console.error('getAuthenticatedUser user unset');
        toast(i18n.t('api.errorMessage'));
        reject();
      }
    } catch (error) {
      toast(i18n.t('api.errorMessage'));
      Sentry.captureException(error);
    }
  });
}
