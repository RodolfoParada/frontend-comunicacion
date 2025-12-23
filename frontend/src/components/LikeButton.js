import { useState } from "react";
import axiosClient from "../api/axiosClient";
import { useHttp } from "../hooks/useHttp";

const likeRequest = () => {
  return axiosClient.patch("/api/like");
};

export default function LikeButton() {
  const [likes, setLikes] = useState(10);

  const {
    sendRequest,
    loading,
    error,
    success,
  } = useHttp(likeRequest);

  const handleLike = async () => {
    try {
      const response = await sendRequest();
      setLikes(response.data.likes);
    } catch (e) {
      // ya manejado por el hook
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>👍 Likes: {likes}</h2>

      <button onClick={handleLike} disabled={loading}>
        {loading ? "Enviando..." : "Me gusta"}
      </button>

      {success && <p style={{ color: "green" }}>✔ Like enviado</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
    </div>
  );
}
