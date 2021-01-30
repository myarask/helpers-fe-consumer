import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

type AuthorizedApolloProviderProps = {
  children: React.ReactNode;
};

const AuthorizedApolloProvider = (props: AuthorizedApolloProviderProps) => {
  const { getAccessTokenSilently } = useAuth0();

  const httpLink = createHttpLink({
    uri:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000/api/graphql'
        : 'http://localhost:4000/api/graphql',
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUTH_AUDIENCE,
    });

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
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
