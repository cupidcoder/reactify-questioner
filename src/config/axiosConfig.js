import axios from 'axios';

const token = window.localStorage.getItem('token');

const instance = axios.create({
  baseURL: process.env.API_BASE_URL
});

if (token !== null || undefined) {
  instance.defaults.headers.common['x-access-token'] = token;
}

export default instance;
