import axios from "axios";

// Creates a base instance for all axios based request
const axiosInstance = axios.create({
  baseURL: `https://x2rq8qbt0d.execute-api.us-east-1.amazonaws.com/dev`,
  withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
  //add api key to auth header
  config.headers.Authorization = process.env.REACT_APP_API_KEY;

  return config;
});

export default axiosInstance;
