import React from 'react'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'


function NavBar() {
    
  return (
    <>
   <Navbar collapseOnSelect 
      expand="lg" 
      bg="light" 
      variant="light"
      sticky="top" >
     <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/fa0b9943473729.56015703dc69c.png"
        height = "60px"
        width = "80px"
        alt="coffee pic">
     </img>
  <Navbar.Brand href="home">CoffeeShop </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Today's Special</Nav.Link>
      <NavDropdown title="You Need" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Desert</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Coffee</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sandwitch</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Ask for more</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link eventKey={2} href="#Contact">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
}

export default NavBar;
