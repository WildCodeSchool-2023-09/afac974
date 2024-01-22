import axios from "axios";

const instance = axios.create({
  baseURL:
    `${import.meta.env.VITE_BACKEND_URL}/api` ?? "http://localhost:3310/api",
  withCredentials: true,
});

export default instance;
