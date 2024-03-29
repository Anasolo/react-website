import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/fa0b9943473729.56015703dc69c.png"
          height="60px"
          width="80px"
          alt="coffee pic"
        ></img>
        <Navbar.Brand>
          <Link to="/Home">CoffeeShop</Link>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Today's Special</Nav.Link>
            <NavDropdown title="You Need" id="collasible-nav-dropdown">
              <NavDropdown.Item>Desert</NavDropdown.Item>
              <NavDropdown.Item>Coffee</NavDropdown.Item>
              <NavDropdown.Item>Sandwitch</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Ask for more</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/About">About</Link>
            </Nav.Link>
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
