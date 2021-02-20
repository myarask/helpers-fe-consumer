import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthorizedApolloProvider, AuthProvider } from './providers';

const stripe = loadStripe(process.env.REACT_APP_STRIPE_KEY);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripe}>
      <AuthProvider>
        <AuthorizedApolloProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </AuthorizedApolloProvider>
      </AuthProvider>
    </Elements>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
