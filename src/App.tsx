import * as React from 'react';
import { Landing, Home, Profile, PaymentMethod, Support, VisitNew, Visit } from './pages';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuth } from './providers';
import { paths } from './constants';
import { MainTopNav } from './components';

const App = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Landing />;
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
        <Route path={paths.paymentMethod} component={PaymentMethod} />
        <Route path={paths.support} component={Support} />
        <Route path={paths.visitNew} component={VisitNew} />
        <Route path={paths.visit} component={Visit} />
        <Route exact path={paths.home} component={Home} />
        <Redirect to={paths.home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
