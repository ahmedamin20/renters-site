import axios from "axios";
import { ACCESS_TOKEN } from "../utils/config/constants";

const defaultAPI = axios.create({
  baseURL: "https://renters-api.ksbgarage.com",
});

// Add a request interceptor

defaultAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers.Locale = `${localStorage.getItem("lang")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default defaultAPI;