import * as React from 'react';
import { useAuth } from './Auth';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

type AuthorizedApolloProviderProps = {
  children: React.ReactNode;
};

const AuthorizedApolloProvider = (props: AuthorizedApolloProviderProps) => {
  const { tokens } = useAuth();

  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
  });

  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: tokens?.access?.token ? `Bearer ${tokens.access.token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client} {...props} />;
};

export { AuthorizedApolloProvider };
