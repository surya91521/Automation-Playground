import React from "react";

function NewTab() {
  const openNewTab = () => {
    const url = "https://hianime.to/home"; // Replace with the actual URL you want to open
    const newTab = window.open(url, "_blank");
    if (!newTab) {
      alert("Unable to open a new tab. Please check your browser settings.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 title="pageTitle">New Tab</h1>
      <p>Learn to handle opening new tab.</p>
      <button
        className="component-button"
        onClick={openNewTab}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Open New Tab
      </button>
    </div>
  );
}

export default NewTab;
