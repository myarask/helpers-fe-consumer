import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../services';

interface AuthInterface {
  isAuthenticated: boolean;
  getAccessToken(): Promise<string | null>;
  login: any;
  logout: any;
  signup: any;
}

type AuthInput = {
  email: string;
  password: string;
};

const Auth = React.createContext<AuthInterface>({
  isAuthenticated: false,
  getAccessToken: () =>
    new Promise<string | null>((resolve) => {
      resolve(null);
    }),
  login: () => null,
  logout: () => null,
  signup: () => null,
});

const useAuth = () => useContext(Auth);

const AuthProvider = ({ children }) => {
  const initialTokens = localStorage.getItem('tokens');

  const [tokens, setTokens] = useState(initialTokens ? JSON.parse(initialTokens) : null);

  const isAuthenticated = () => {
    if (!tokens?.refresh?.expires) return false;

    if (new Date(tokens.refresh.expires) < new Date()) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    localStorage.setItem('tokens', JSON.stringify(tokens));

    if (!isAuthenticated()) {
      // Refresh token is expired or invalid
      setTokens(null);
      localStorage.removeItem('tokens');
    }
  }, [tokens]);

  const login = (input: AuthInput) => {
    return auth.login(input).then((resp) => {
      setTokens(resp.data.tokens);
    });
  };

  const logout = async () => {
    localStorage.removeItem('tokens');
    setTokens(null);

    await auth.logout({ refreshToken: tokens.refresh.token });
  };

  const signup = (input: AuthInput) => {
    return auth.signup(input).then((resp) => {
      setTokens(resp.data.tokens);
    });
  };

  const getAccessToken = async () => {
    if (!tokens?.access?.token || !tokens?.access?.expires) {
      // No tokens
      setTokens(null);
      return null;
    }
    if (new Date(tokens.refresh.expires) < new Date()) {
      // Refresh token is expired
      setTokens(null);
      return null;
    }
    if (new Date(tokens.access.expires) > new Date()) {
      // Access token is still good
      return tokens.access.token;
    }

    if (new Date(tokens.refresh.expires) > new Date()) {
      // Refresh token is still good

      // TODO: Error handling
      const { data } = await auth.refreshToken({ refreshToken: tokens.refresh.token });
      setTokens(data);

      return data.access.token;
    }

    return null;
  };

  return (
    <Auth.Provider value={{ isAuthenticated: isAuthenticated(), getAccessToken, login, logout, signup }}>
      {children}
    </Auth.Provider>
  );
};

export { useAuth, AuthProvider };
