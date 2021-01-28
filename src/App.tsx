import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (!isAuthenticated) {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
      </header>
    </div>
  );
};

export default App;
