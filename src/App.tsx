import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { Button, LinearProgress } from '@material-ui/core';

const App = () => {
  const { isLoading, isAuthenticated, error, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <LinearProgress />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (!isAuthenticated) {
    return <Button onClick={loginWithRedirect}>Log in</Button>;
  }

  return (
    <div className="App">
      <header className="App-header">
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
