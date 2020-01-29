import ApolloClient from 'apollo-boost';
import { toast } from 'react-toastify';

import i18n from '../../common/translation/i18n/i18nInit';
import { store } from '../app/state/AppStore';
import { apiTokenSelector } from '../auth/state/AuthenticationSelectors';

export default new ApolloClient({
  request: async operation => {
    try {
      const token = apiTokenSelector(store.getState());
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      // User not authenticated
      toast(i18n.t('api.errorMessage'), {
        type: toast.TYPE.ERROR,
      });
    }
  },
  uri: process.env.REACT_APP_API_URI,
});
