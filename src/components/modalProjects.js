import React, { useState } from "react";
import { Modal, Button, Col, Row, Carousel } from "react-bootstrap";
import "../styles/project.scss";

export default function ModalProjects({ stack, projects }) {
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const front = projects.frontend.map((item, index) => {
          return (
               <Carousel.Item>
                    <img className="modalImg" src={item.image} />
                    <Carousel.Caption>
                         <Row>
                              <Col>
                                   <div className="detailsContainer">
                                        <h4>{item.title}</h4>
                                        <p>{item.subTitle}</p>
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
     const back = projects.backend.map((item, index) => {
          return (
               <Carousel.Item>
                    <img className="modalImg" src={item.image} />
                    <Carousel.Caption>
                         <Row>
                              <Col>
                                   <div className="detailsContainer">
                                        <h4>{item.title}</h4>
                                        <p>{item.subTitle}</p>
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
     const fullstack = projects.fullstack.map((item, index) => {
          return (
               <Carousel.Item key={index}>
                    <img className="modalImg" src={item.image} />
                    <Carousel.Caption>
                         <Row>
                              <Col>
                                   <div className="detailsContainer">
                                        <h4>{item.title}</h4>
                                        <p>{item.subTitle}</p>
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
                         <Carousel>
                              {stack === "front"
                                   ? front
                                   : stack === "back"
                                   ? back
                                   : stack === "fullstack"
                                   ? fullstack
                                   : null}
                         </Carousel>
                         {/* 
                         <Button className="btnMoreProjCloseModal" onClick={handleClose}>
                              Close
                         </Button> */}
                    </Modal.Body>
               </Modal>
          </>
     );
}
