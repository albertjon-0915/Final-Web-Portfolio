import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Particles from "../components/Particles";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import ToolsAndTechnology from "../components/ToolsAndTechnology";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import myImg from "../images/me-ako.png";

export default function Home() {
     return (
          <>
               <div as={Container} fluid className="containerParticles">
                    <Row className="heroPageContainer p-sm-0">
                         <Col md={6} sm={12} className="imgContainer p-sm-0">
                              <img src={myImg} alt="logo" className="myImg" />
                         </Col>
                         <Col md={6} sm={12} className="heroContentContainer  p-sm-2">
                              <h1 className="text-center text-md-start">Hi, I'm Albert Inciong</h1>
                              <h3 className="text-center text-md-start">a future web developer</h3>
                              <button>Explore</button>
                         </Col>
                    </Row>
                    <Particles />
               </div>
               <Carousel />
               <Container fluid className="homeDivContainer">
                    <div className="homeDiv1"></div>
                    <div className="homeDiv2"></div>
               </Container>
               <Cards />
               <ToolsAndTechnology />
               <Projects />
               <Footer />
          </>
     );
}
