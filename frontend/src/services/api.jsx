import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_ENDPOINT || "http://localhost:3001"
});

export default api;
