import * as React from 'react';
import { Home, Profile } from './pages';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { LinearProgress } from '@material-ui/core';
import { paths } from './constants';
import { GET_MY_USER } from './queries';
import { MainTopNav } from './components';

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
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={[
            paths.home,
            paths.paymentMethod,
            paths.profile,
            paths.upcomingServices,
            paths.serviceHistory,
            paths.support,
            paths.privacyAndTerms,
            paths.settings,
          ]}
          component={MainTopNav}
        />
      </Switch>
      <Switch>
        <Route path={paths.profile} component={Profile} />
        {/* 
        <Route path={paths.serviceHistory} component={ServiceHistory} />
        <Route path={paths.paymentMethod} component={PaymentMethod} />
        <Route path={paths.privacyAndTerms} component={PrivacyAndTerms} />
        <Route path={paths.settings} component={Settings} />
        <Route path={paths.support} component={Support} />
        <Route path={paths.visitNew} component={VisitNew} />
        <Route path={paths.visit} component={Visit} /> */}
        <Route exact path={paths.home} component={Home} />
        <Redirect to={paths.home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
