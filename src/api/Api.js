import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://mvn-task-manager.work',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token');
    if(token){
    config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return error;
  }
);
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
