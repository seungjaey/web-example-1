import axios from 'axios';

const demoHttpClient = axios.create({
  baseURL: 'http://localhost:4000',
});

export { demoHttpClient };
