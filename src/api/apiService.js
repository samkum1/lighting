import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiService = {
  getAccountInfo: (username) => {
    return apiClient.post("/users/account-info", { username });
  },
  getUsernameInfo: (username) => {
    return apiClient.post("/users/username-info", {username} );
  },
  getProxyList: (payload) => {
    return apiClient.post("/users/proxy-list", payload );
  },
  getCountryList: (payload) => {
    return apiClient.post("/users/country-state-city", payload);
  },
  addGBToPlan: (payload) => {
    return apiClient.post("/users/add-gigabytes", payload);
  },
};

export default ApiService;
