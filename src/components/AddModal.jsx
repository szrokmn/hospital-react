import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export const AddModal = ({ show, handleClose, drName }) => {

  const [patientName, setPatientName] = useState("")
  const [date, setDate] = useState("")

const handleSubmit = (e) => {
  e.preventDefault();
  handleClose()
}
console.log(patientName, date)

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" onChange={(e)=> setPatientName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control type="datetime-local" onChange={(e)=> setDate(e.target.value)}/>
            </Form.Group>
            <div className="text-center ">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
