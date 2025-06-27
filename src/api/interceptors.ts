import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "production"
      ? import.meta.env.VITE_PRODUCTION_API_URL
      : import.meta.env.VITE_DEV_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 400) {
      return Promise.reject({
        type: "VALIDATION_ERROR",
        details: error.response.data,
      });
    }

    if (status === 401 || status === 403) {
      return Promise.reject({
        type: "AUTH_ERROR",
        message: "Unauthorized or forbidden.",
      });
    }

    if (status === 409) {
      return Promise.reject({
        type: "CONFLICT_ERROR",
        message: error.response.data.message,
      });
    }

    // e.g., 500 or network error
    window.location.href = "/error"; // or show toast, modal, etc.
    return Promise.reject({
      type: "INTERNAL_ERROR",
      message: "Something went wrong. Please try again later.",
    });
  }
);

export default api;
