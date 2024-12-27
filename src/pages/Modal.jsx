import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 title="pageTitle">Modal</h1>
      <p>Learn to handle Modals in your application.</p>
      <Button variant="primary" onClick={handleShow}>
        Open modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the text which is present inside the modal. </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;
