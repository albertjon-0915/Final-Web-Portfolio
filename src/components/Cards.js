import React from "react";
import { Card, Container } from "react-bootstrap";
import "../styles/card.scss";

import { FaReact, FaCss3Alt, FaJs } from "react-icons/fa";
import logoHtml5 from "../images/toolsAndTech/logo-html5.png";
import logoBootstrap from "../images/toolsAndTech/logo-bootstrap.png";
import logoCss3 from "../images/toolsAndTech/logo-css3.png";
import logoJavascript from "../images/toolsAndTech/logo-javascript.png";
import logoExpressjs from "../images/toolsAndTech/logo-expressjs.png";
import logoMongodb from "../images/toolsAndTech/logo-mongodb.png";
import nodejsCard from "../images/toolsAndTech/nodejs-card.png";
import logoPostman from "../images/toolsAndTech/logo-postman.png";
import logoGit from "../images/toolsAndTech/logo-git.png";
import logoReact from "../images/toolsAndTech/logo-react.png";
import logoRest from "../images/toolsAndTech/logo-rest.png";

export default function Cards() {
     return (
          <>
               <Container fluid className="cardContainer d-flex  justify-content-center" id='cards'>
                    <Card
                         style={{ minWidth: "18rem", maxWidth: "20rem" }}
                         className="d-lg-block d-none mx-xl-5 mx-lg-1"
                    >
                         <FaCss3Alt className="cardImg" />
                         <Card.Body>
                              <Card.Title className="text-center">
                                   Front <span>End</span>
                              </Card.Title>
                              <Card.Text>
                                   Specializes in creating the visual and interactive elements of a website using tools
                                   and technologies such as HTML, CSS, SASS, Bootstrap, JavaScript, ReactJS, and Chrome
                                   DevTools to ensure a seamless user experience.
                              </Card.Text>
                              <div>
                                   <img src={logoHtml5} alt="logo" />
                                   <img src={logoBootstrap} alt="logo" />
                                   <img src={logoCss3} alt="logo" />
                                   <img src={logoJavascript} alt="logo" />
                              </div>
                         </Card.Body>
                    </Card>
                    <Card
                         style={{ minWidth: "18rem", maxWidth: "20rem" }}
                         className="d-lg-block d-none mx-xl-5 mx-lg-1"
                    >
                         <FaJs className="cardImg" />
                         <Card.Body>
                              <Card.Title className="text-center">
                                   Back <span>End</span>
                              </Card.Title>
                              <Card.Text>
                                   Focuses on server-side development, utilizing NodeJS, ExpressJS, Mongoose, and
                                   MongoDB to manage databases, server logic, and application integration, ensuring the
                                   functionality and performance of web applications.
                              </Card.Text>
                              <div>
                                   <img src={logoExpressjs} alt="logo" />
                                   <img src={logoMongodb} alt="logo" />
                                   <img src={nodejsCard} alt="logo" />
                                   <img src={logoPostman} alt="logo" />
                              </div>
                         </Card.Body>
                    </Card>
                    <Card
                         style={{ minWidth: "18rem", maxWidth: "20rem" }}
                         className="d-lg-block d-none  mx-xl-5 mx-lg-1"
                    >
                         <FaReact className="cardImg" />
                         <Card.Body>
                              <Card.Title className="text-center">
                                   MERN <span>Stack</span>
                              </Card.Title>
                              <Card.Text>
                                   Combines both front-end and back-end expertise, proficient in using the entire suite
                                   of technologies including HTML, CSS, SASS, Bootstrap, JavaScript, NodeJS, ExpressJS,
                                   Mongoose, ReactJS, MongoDB, Git, Postman, Sublime, VScode, Github, and Chrome
                                   DevTools to develop comprehensive and efficient web applications.
                              </Card.Text>
                              <div>
                                   <img src={logoReact} alt="logo" />
                                   <img src={logoRest} alt="logo" />
                                   <img src={logoGit} alt="logo" />
                                   <img src={logoJavascript} alt="logo" />
                              </div>
                         </Card.Body>
                    </Card>
               </Container>
          </>
     );
}
