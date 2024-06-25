import React from "react";
import { Card, Container } from "react-bootstrap";
import "../styles/homePage.scss";

import { FaReact, FaCss3Alt, FaJs } from "react-icons/fa";

export default function Cards() {
     return (
          <>
               <Container fluid className="cardContainer d-flex  justify-content-center">
                    <Card
                         style={{ minWidth: "18rem", maxWidth: "20rem" }}
                         className="d-lg-block d-none mx-xl-5 mx-lg-1"
                    >
                         <FaCss3Alt className="cardImg" />
                         <Card.Body>
                              <Card.Title className="text-center">Front <span>End</span></Card.Title>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of the card's
                                   content.
                              </Card.Text>
                         </Card.Body>
                    </Card>
                    <Card
                         style={{ minWidth: "18rem", maxWidth: "20rem" }}
                         className="d-lg-block d-none mx-xl-5 mx-lg-1"
                    >
                         <FaJs className="cardImg" />
                         <Card.Body>
                              <Card.Title className="text-center">Back <span>End</span></Card.Title>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of the card's
                                   content.
                              </Card.Text>
                         </Card.Body>
                    </Card>
                    <Card
                         style={{ minWidth: "18rem", maxWidth: "20rem" }}
                         className="d-lg-block d-none  mx-xl-5 mx-lg-1"
                    >
                         <FaReact className="cardImg" />
                         <Card.Body>
                              <Card.Title className="text-center">MERN <span>Stack</span></Card.Title>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of the card's
                                   content.
                              </Card.Text>
                         </Card.Body>
                    </Card>
               </Container>
          </>
     );
}
