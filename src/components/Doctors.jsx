import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddModal } from "./AddModal"

const Doctors = ({ doctors }) => {

    const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const handleClick = () => {
        // handleShow()
        setShow(true)
    }

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "purple" }}>
        Our Doctors
      </h3>
      <Row className="justift-content-center">
        {doctors.map((dr) => (
          <Col key={dr.id}>
            <img src={dr.img} alt="dr.name" xs={6} sm={4} md={3} onClick={handleClick}/>
            <h4>{dr.name}</h4>
            <h6>{dr.dep}</h6>
          </Col>
        ))}
      </Row>
      {/* <AddModal show={show} handleClose={handleClose}/> */}
      <AddModal show={show} handleClose={()=> setShow(false)}/>
    </Container>
  );
};

export default Doctors;
