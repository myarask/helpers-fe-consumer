import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../services';

interface AuthInterface {
  isAuthenticated: boolean;
  tokens: any;
  login: any;
}

type Profile = {
  email: string;
  password: string;
};

const Auth = React.createContext<AuthInterface>({
  isAuthenticated: false,
  tokens: null,
  login: () => null,
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

  const login = (profile: Profile) => {
    return auth.login(profile).then((resp) => {
      setTokens(resp.data.tokens);

      console.log('here');
    });
  };

  return <Auth.Provider value={{ isAuthenticated: isAuthenticated(), tokens, login }}>{children}</Auth.Provider>;
};

export { useAuth, AuthProvider };
