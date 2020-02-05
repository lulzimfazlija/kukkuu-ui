import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { toast } from 'react-toastify';

import { apiTokenSelector } from '../auth/state/AuthenticationSelectors';
import { store } from '../app/state/AppStore';
import i18n from '../../common/translation/i18n/i18nInit';
import { showExpiredSessionPrompt } from '../app/state/ui/UIActions';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URI,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(() => toast('authentication.loadUserError.message'));

  if (networkError) toast(i18n.t('authentication.network.error'));

  store.dispatch(showExpiredSessionPrompt());
  // Now show session timeout for all kind of error.
  // In near future when backend comeup with better
  // statusCode from error body
  // Error can be handle better here.
});
const authLink = setContext((_, { headers }) => {
  const token = apiTokenSelector(store.getState());
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
