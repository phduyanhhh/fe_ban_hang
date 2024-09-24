// Set config defaults when creating the instance
import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACK_END_URL
  });
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance;