import * as React from 'react';
import { Home, Profile, PaymentMethod, Support, VisitNew, Visit } from './pages';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { LinearProgress, Button } from '@material-ui/core';
import { paths } from './constants';
import { MainTopNav } from './components';
import { Plugins } from '@capacitor/core';

const redirectUris = {
  web: window.location.origin,
  ios: `ca.gethelpers.app://${process.env.REACT_APP_AUTH_DOMAIN}/ios/ca.gethelpers.app/callback`,
  android: `ca.gethelpers.app://${process.env.REACT_APP_AUTH_DOMAIN}/android/ca.gethelpers.app/callback`,
};

const App = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect } = useAuth0();
  const [deviceInfo, setDeviceInfo] = React.useState<any>(null);
  const [launchUrl, setLaunchURL] = React.useState<any>(null);
  const [time, setTime] = React.useState<string>(new Date().toISOString());

  React.useEffect(() => {
    Plugins.Device.getInfo().then(setDeviceInfo);
    Plugins.App.getLaunchUrl().then(setLaunchURL);
  }, [Plugins, setDeviceInfo]);

  if (isLoading || !deviceInfo) {
    return <LinearProgress />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (!isAuthenticated) {
    return (
      <>
        {window.location.href}
        {deviceInfo.platform}
        <Button onClick={() => loginWithRedirect({ redirectUri: redirectUris[deviceInfo.platform] })}>Login</Button>
        {launchUrl?.url}
        {user?.email}
        <hr />
        <Button onClick={() => setTime(new Date().toISOString())}>Reset Time</Button>
        {time}
      </>
    );
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
