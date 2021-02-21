import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URI;

type AuthInputs = {
  email: string;
  password: string;
};

const auth = {
  login: (input: AuthInputs) => {
    return axios.post('/auth/login', input);
  },
  logout: (input: { refreshToken: string }) => {
    return axios.post('/auth/logout', input);
  },
  signup: (input: AuthInputs) => {
    return axios.post('/auth/register', input);
  },
};

export { auth };
