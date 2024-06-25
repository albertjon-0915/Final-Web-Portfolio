import React from "react";
import "../styles/homePage.scss";
import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../mockData/mockData";

import ModalProjects from "./modalProjects";

export default function Projects() {
     return (
          <>
               <div
                    as={Container}
                    className="projTitleContainer d-flex flex-column justify-content-center text-wrap mt-md-5 pt-md-5"
               >
                    <h1 className="text-center mb-5">Projects</h1>
                    <p className="text-center text-wrap mb-md-5">
                         These Projects are the one's that i built during my Bootcamp. In which some may not be visually
                         appealing but nevertheless serves its purpose/requirements as a functional website. Please do
                         remember that all of this projects are deployed and hosted online.
                    </p>
               </div>
               <Container className="projContainer">
                    <Row>
                         <Col lg={6} md={12}>
                              <div className="detailsContainer ">
                                   <h4>{projects.frontend[0].title}</h4>
                                   <p>{projects.frontend[0].subTitle}</p>
                                   <a href={projects.frontend[0].link} className="text-decoration-none fst-italic">
                                        {projects.frontend[0].link}
                                   </a>
                                   <p>{projects.frontend[0].description}</p>
                                   <ModalProjects projects={projects} stack={"front"} />
                              </div>
                         </Col>
                         <Col lg={6} md={12} className="order-first order-lg-last">
                              <div className="imgContainer">
                                   <img src={projects.frontend[0].link} alt="" className="projImg" />
                              </div>
                         </Col>
                    </Row>
                    <Row>
                         <Col lg={6} md={12}>
                              <div className="imgContainer">
                                   <img src={projects.backend[0].link} alt="" className="projImg" />
                              </div>
                         </Col>
                         <Col lg={6} md={12}>
                              <div className="detailsContainer ">
                                   <h4>{projects.backend[0].title}</h4>
                                   <p>{projects.backend[0].subTitle}</p>
                                   <a href={projects.backend[0].link} className="text-decoration-none fst-italic">
                                        {projects.backend[0].link}
                                   </a>
                                   <p>{projects.backend[0].description}</p>
                                   <ModalProjects projects={projects} stack={"back"} />
                              </div>
                         </Col>
                    </Row>
                    <Row>
                         <Col lg={6} md={12}>
                              <div className="detailsContainer">
                                   <h4>{projects.fullstack[0].title}</h4>
                                   <p>{projects.fullstack[0].subTitle}</p>
                                   <a href={projects.fullstack[0].link} className="text-decoration-none fst-italic">
                                        {projects.fullstack[0].link}
                                   </a>
                                   <p>{projects.fullstack[0].description}</p>
                                   <ModalProjects projects={projects} stack={"fullstack"} />
                              </div>
                         </Col>
                         <Col lg={6} md={12} className="order-first order-lg-last">
                              <div className="imgContainer">
                                   <img src={projects.fullstack[0].link} alt="" className="projImg" />
                              </div>
                         </Col>
                    </Row>
               </Container>
          </>
     );
}
