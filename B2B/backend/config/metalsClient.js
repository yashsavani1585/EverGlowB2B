// backend/config/metalsClient.js
import axios from "axios";

const metalsAxios = axios.create({
  baseURL: process.env.METALS_API_URL, // e.g. https://gold.g.apised.com/v1/latest
  timeout: 8000,
});

metalsAxios.interceptors.request.use((config) => {
  config.headers["x-api-key"] = process.env.METALS_API_KEY;
  return config;
});

export default metalsAxios;
