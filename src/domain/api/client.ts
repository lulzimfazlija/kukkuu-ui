import ApolloClient from 'apollo-boost';

import { StoreState } from '../app/types/AppTypes';
import { store } from '../app/state/AppStore';

function select(state: StoreState) {
  return state.authentication.backend.apiToken;
}

export default new ApolloClient({
  request: async operation => {
    try {
      const token = select(store.getState());
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      // User not authenticated
      // eslint-disable-next-line no-console
      console.error(e);
      // TODO: add error-handler
    }
  },
  uri: process.env.REACT_APP_API_URI,
});
