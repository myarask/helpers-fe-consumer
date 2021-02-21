import * as React from 'react';
import { useAuth } from './Auth';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

type AuthorizedApolloProviderProps = {
  children: React.ReactNode;
};

const AuthorizedApolloProvider = (props: AuthorizedApolloProviderProps) => {
  const { getAccessToken } = useAuth();
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await getAccessToken();

    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
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
