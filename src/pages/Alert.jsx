import React from "react";
import BackButton from "../components/BackButton";

function Alert() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <BackButton />
      <br />
      <br />
      <h1>Alert</h1>
      <p>Learn to handle alerts in your application.</p>
      <div className="button-container">
        <button
          className="component-button"
          id="alertButton"
          aria-label="Show Alert"
          onClick={() => alert("This is an alert message!")}>
          Show Alert
        </button>
      </div>
    </div>
  );
}

export default Alert;
