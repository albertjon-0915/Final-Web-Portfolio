import React from "react";
import { Container } from "react-bootstrap";

import Particles from "../components/Particles";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import ToolsAndTechnology from "../components/ToolsAndTechnology";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
     return (
          <>
               <div className="containerParticles">
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
