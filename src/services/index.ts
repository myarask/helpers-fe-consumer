import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URI;

type RefreshTokenInputs = {
  refreshToken: string;
};

type ResetInputs = {
  email;
};

type AuthInputs = {
  email: string;
  password: string;
};

const auth = {
  login: (input: AuthInputs) => {
    return axios.post('/auth/login', input);
  },
  logout: (input: RefreshTokenInputs) => {
    return axios.post('/auth/logout', input);
  },
  signup: (input: AuthInputs) => {
    return axios.post('/auth/register', input);
  },
  refreshToken: (input: RefreshTokenInputs) => {
    return axios.post('/auth/refresh-tokens', input);
  },
  forgotPassword: (input: ResetInputs) => {
    return axios.post('/auth/forgot-password', input);
  },
};

export { auth };
