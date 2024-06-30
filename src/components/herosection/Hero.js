import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particles from "./Particles";
import "../../styles/particleContainer.scss";

import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import myImg from "../../images/me-ako.png";

export default function herosection() {
     return (
          <div as={Container} fluid="true" className="containerParticles">
               <Row className="heroPageContainer p-sm-0">
                    <Col md={6} sm={12} className="imgContainer p-sm-0">
                         <img src={myImg} alt="logo" className="myImg" />
                    </Col>
                    <Col md={6} sm={12} className="heroContentContainer  p-sm-2">
                         <h1 className="text-center text-md-start">Hi, I'm Albert Inciong</h1>
                         <p className="text-center text-md-start">a future web developer</p>
                         <a href="#cards" className="exploreButton px-5 py-2">
                              Explore
                         </a>
                         <ul className="list-unstyled d-flex">
                              <li>
                                   <a href="https://www.facebook.com/alaric.0915" target="_blank">
                                        <BsFacebook className="logo" />
                                   </a>
                              </li>
                              <li>
                                   <a href="https://www.linkedin.com/in/albert-jon-7a8957288/" target="_blank">
                                        <BsLinkedin className="logo" />
                                   </a>
                              </li>
                              <li>
                                   <a href="https://github.com/albertjon-0915" target="_blank">
                                        <BsGithub className="logo" />
                                   </a>
                              </li>
                         </ul>
                    </Col>
               </Row>
               <Particles />
          </div>
     );
}
