import React, { useState } from "react";
import { Modal, Button, Col, Row, Carousel } from "react-bootstrap";
import "../styles/project.scss";

export default function ModalProjects({ projects }) {
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     console.log(projects);

     const stack = projects.map((item, index) => {
          return (
               <Carousel.Item key={index}>
                    <img className="modalImg" src={item.imageString} />
                    <Carousel.Caption>
                         <Row>
                              <Col>
                                   <div className="detailsContainer">
                                        <h4>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                        <a href={item.link} className="text-decoration-none fst-italic">
                                             {item.link}
                                        </a>
                                        <p>{item.description}</p>
                                   </div>
                              </Col>
                         </Row>
                    </Carousel.Caption>
               </Carousel.Item>
          );
     });

     return (
          <>
               <Button className="btnMoreProj" onClick={handleShow}>
                    more
               </Button>

               <Modal show={show} onHide={handleClose} centered size="lg">
                    <Modal.Body>
                         <Carousel>{stack}</Carousel>
                    </Modal.Body>
               </Modal>
          </>
     );
}
