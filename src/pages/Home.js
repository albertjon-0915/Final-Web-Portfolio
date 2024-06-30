import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import ToolsAndTechnology from "../components/ToolsAndTechnology";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Hero from "../components/herosection/Hero";



export default function Home() {
     return (
          <>
               <Hero />
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
