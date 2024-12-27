import React from "react";

function Alert() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Alert</h1>
      <p>Learn to handle alerts in your application.</p>
      <button
        className="component-button"
        id="alertButton"
        aria-label="Show Alert"
        onClick={() => alert("This is an alert message!")}>
        Show Alert
      </button>
    </div>
  );
}

export default Alert;
