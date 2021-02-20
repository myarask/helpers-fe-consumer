import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URI;

const auth = {
  login: ({ email, password }: { email: string; password: string }) => {
    return axios.post('/auth/login', { email, password });
  },
  logout: (body: { refreshToken: string }) => {
    return axios.post('/auth/logout', body);
  },
};

export { auth };
