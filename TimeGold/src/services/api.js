import axios from "axios";
import authService from "./authServices";

const api = axios.create({
    baseURL: "https://localhost:7188/api",
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(config => {
    const token = authService.getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


export default api;