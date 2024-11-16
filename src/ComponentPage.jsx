import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ComponentPage() {
  const { name } = useParams(); // Get the dynamic page name
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{name.replace(/-/g, " ").toUpperCase()}</h1>
      <p>This is the {name.replace(/-/g, " ")} page.</p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          background: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default ComponentPage;
