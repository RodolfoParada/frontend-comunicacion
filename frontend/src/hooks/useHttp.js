import { useState } from "react";

export const useHttp = (requestFn) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendRequest = async (...args) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await requestFn(...args);
      setSuccess(true);
      return response;
    } catch (err) {
      setError(err.response?.data?.message || "Error de red");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    sendRequest,
    loading,
    error,
    success,
  };
};
