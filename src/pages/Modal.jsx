import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 title="pageTitle">Modals</h1>
      <p>Learn to handle Modals in your application.</p>
      <button onClick={openModal}>Show Modal</button>
      {isOpen && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
          <h2 title="modalTitle">Modal Content</h2>
          <p description="modalContent">This is the content of the modal.</p>
          <button onClick={closeModal} id="backButton">Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default Modal;



