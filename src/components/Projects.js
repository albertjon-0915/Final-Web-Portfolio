import React, { useEffect, useState } from "react";
import "../styles/project.scss";
import { Container, Row, Col } from "react-bootstrap";
import ModalProjects from "./modalProjects";

export default function Projects() {
     const [dataset, setDataset] = useState({});

     const fetchData = () => {
          fetch(`${process.env.REACT_APP_API_URL}/projects`)
               .then((res) => res.json())
               .then((data) => {
                    if (data.message === "found items") {
                         console.log(data.result[0].projects);
                         setDataset(data.result[0].projects);
                    }
               })
               .catch((error) => console.error("Error fetching data:", error));
     };

     useEffect(() => {
          fetchData();
     }, []);

     return (
          <>
               <div
                    as={Container}
                    className="projTitleContainer d-flex flex-column justify-content-center text-wrap mt-md-5 pt-md-5"
               >
                    <h1 className="text-center mb-5">Projects</h1>
                    <p className="text-center text-wrap mb-md-5">
                         These Projects are the ones that I built during my Bootcamp. Some may not be visually appealing
                         but nevertheless serve their purpose/requirements as functional websites. Please note that all
                         these projects are deployed and hosted online.
                    </p>
               </div>
               <Container className="projContainer">
                    {/* Example for frontend */}
                    {dataset.frontend && dataset.frontend.length > 0 && (
                         <Row>
                              <Col lg={6} md={12}>
                                   <div className="detailsContainer">
                                        <h2>{dataset.frontend[0].title}</h2>
                                        <p>{dataset.frontend[0].subtitle}</p>
                                        <a href={dataset.frontend[0].link}>{dataset.frontend[0].link}</a>
                                        <p>{dataset.frontend[0].description}</p>
                                        <ModalProjects projects={dataset.frontend} />
                                   </div>
                              </Col>
                              <Col lg={6} md={12} className="order-first order-lg-last">
                                   <div className="imgContainer">
                                        <img src={dataset.frontend[0].imageString} alt="" className="projImg" />
                                   </div>
                              </Col>
                         </Row>
                    )}

                    {/* Example for backend */}
                    {dataset.backend && dataset.backend.length > 0 && (
                         <Row>
                              <Col lg={6} md={12}>
                                   <div className="detailsContainer">
                                        <h2>{dataset.backend[0].title}</h2>
                                        <p>{dataset.backend[0].subtitle}</p>
                                        <a href={dataset.backend[0].link}>{dataset.backend[0].link}</a>
                                        <p>{dataset.backend[0].description}</p>
                                        <ModalProjects projects={dataset.backend} />
                                   </div>
                              </Col>
                              <Col lg={6} md={12} className="order-first order-lg-last">
                                   <div className="imgContainer">
                                        <img src={dataset.backend[0].imageString} alt="" className="projImg" />
                                   </div>
                              </Col>
                         </Row>
                    )}

                    {/* Example for fullstack */}
                    {dataset.fullstack && dataset.fullstack.length > 0 && (
                         <Row>
                              <Col lg={6} md={12}>
                                   <div className="detailsContainer">
                                        <h2>{dataset.fullstack[0].title}</h2>
                                        <p>{dataset.fullstack[0].subtitle}</p>
                                        <a href={dataset.fullstack[0].link}>{dataset.fullstack[0].link}</a>
                                        <p>{dataset.fullstack[0].description}</p>
                                        <ModalProjects projects={dataset.fullstack} />
                                   </div>
                              </Col>
                              <Col lg={6} md={12} className="order-first order-lg-last">
                                   <div className="imgContainer">
                                        <img src={dataset.fullstack[0].imageString} alt="" className="projImg" />
                                   </div>
                              </Col>
                         </Row>
                    )}
               </Container>
          </>
     );
}
