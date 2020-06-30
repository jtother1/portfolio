import React from "react";
import { Nav, Navbar } from "react-bootstrap";


function NavigationBar() {
  return (
    <Navbar className="nav">
      <Navbar.Brand className="name">Juan Quiroz</Navbar.Brand>
      <Nav>
        <Nav.Link href="/resume">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
