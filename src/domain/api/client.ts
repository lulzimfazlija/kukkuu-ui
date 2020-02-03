// Authentication Link Example from https://www.apollographql.com/docs/react/recipes/authentication.html#Header

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import customFetch from './customFetch';
import { apiTokenSelector } from '../auth/state/AuthenticationSelectors';
import { store } from '../app/state/AppStore';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URI,
  fetch: customFetch,
  fetchOptions: {
    body: JSON.stringify({ query: '{ myProfile { id } }' }),
  },
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = apiTokenSelector(store.getState());
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
