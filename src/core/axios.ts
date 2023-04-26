import axios from 'axios';
import { parseCookies } from 'nookies';

axios.defaults.baseURL = 'http://localhost:8080';

// @ts-ignore
axios.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const { _token } = parseCookies();

    config.headers.Authorization = `Bearer ${_token}`;
  }
});

export default axios;
