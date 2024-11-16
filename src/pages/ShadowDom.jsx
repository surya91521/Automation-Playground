import React from "react";

function ShadowDom() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Alert</h1>
      <p>Learn to handle alerts in your application.</p>
      <button
        id="alertButton"
        aria-label="Show Alert"
        onClick={() => alert("This is an alert message!")}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
      >
        Show Alert
      </button>
    </div>
  );
}

export default ShadowDom;
