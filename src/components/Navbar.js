import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "../styles/navbar.scss";
import { BsList, BsX } from "react-icons/bs";

export default function AppNavBar() {
     const [isExpanded, setIsExpanded] = useState(false);
     const toggleExpand = () => {
          setIsExpanded(!isExpanded);
     };
     return (
          <Navbar expand="md" className="Navbar p-3" collapseOnSelect>
               <Container fluid>
                    <Navbar.Brand href="#">
                         Web<span>Porfolio</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleExpand}>
                         {isExpanded ? <BsX /> : <BsList />}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                         <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                              <Nav.Link href="#" onClick={toggleExpand}>
                                   Home
                              </Nav.Link>
                              <Nav.Link href="#cards" onClick={toggleExpand}>
                                   Skills
                              </Nav.Link>
                              <Nav.Link href="#proj" onClick={toggleExpand}>
                                   Projects
                              </Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
}
