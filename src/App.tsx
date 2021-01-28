import * as React from 'react';
import { useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { LinearProgress } from '@material-ui/core';
import { GET_MY_USER } from './queries';

const App = () => {
  const myUser = useQuery(GET_MY_USER);
  const { isLoading, isAuthenticated, error, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <LinearProgress />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (!isAuthenticated) {
    loginWithRedirect();
    return <LinearProgress />;
  }

  return (
    <div className="App">
      <header className="App-header">
        {myUser?.data?.myUser?.fullName}
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
