import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de petición
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // opcional
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de respuesta
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error HTTP:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
