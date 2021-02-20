/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_AUTH_DOMAIN: string;
    REACT_APP_AUTH_CLIENT_ID: string;
    REACT_APP_AUTH_AUDIENCE: string;
    REACT_APP_STRIPE_KEY: string;
    REACT_APP_BACKEND_URI: string;
  }
}
