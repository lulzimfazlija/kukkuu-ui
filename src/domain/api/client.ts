import ApolloClient from 'apollo-boost';
import { toast } from 'react-toastify';

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
      // eslint-disable-next-line no-console
      console.error('Error in client.ts');
      console.error(e);
      toast('An error occured. Please try again later');
    }
  },
  uri: process.env.REACT_APP_API_URI,
});
