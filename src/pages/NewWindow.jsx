import React from "react";

function NewWindow() {
  const openNewWindow = () => {
    const url = "https://hianime.to/home"; // The URL to open in a new browser window
    const newWindow = window.open(url, "HiAnimeWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600,left=100,top=100");
    if (!newWindow) {
      alert("Unable to open a new browser window. Please check your browser settings.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={openNewWindow}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Open Hi Anime in New Window
      </button>
    </div>
  );
}

export default NewWindow;
