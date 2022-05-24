import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import "./Navbar.css";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Juan Quiroz</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/resume">Resume</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavigationBar;
