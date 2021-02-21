import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../services';

interface AuthInterface {
  isAuthenticated: boolean;
  tokens: any;
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
  tokens: null,
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

  return (
    <Auth.Provider value={{ isAuthenticated: isAuthenticated(), tokens, login, logout, signup }}>
      {children}
    </Auth.Provider>
  );
};

export { useAuth, AuthProvider };
