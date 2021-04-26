import React from "react";
import { Nav } from "react-bootstrap";

const SideBar = () => {
  return (
    <>
      <Nav className="nav" defaultActiveKey="/home" className="flex-column">
        <Nav.Link className="navlink" href="">
          How to Order Online
        </Nav.Link>
        <Nav.Link className="navlink" eventKey="link-1">
          Where To Find Us
        </Nav.Link>
        <Nav.Link className="navlink" eventKey="link-2">
          Need Help?
        </Nav.Link>
        <Nav.Link className="navlink" eventKey="link-1">
          Ingredients We Use
        </Nav.Link>
        <Nav.Link className="navlink" eventKey="link-1">
          History
        </Nav.Link>
        <Nav.Link className="navlink" eventKey="link-1">
          Have Some Ideas?
        </Nav.Link>
        <Nav.Link className="navlink" eventKey="link-1">
          Feedbacks
        </Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Have a Nice Day!
        </Nav.Link>
      </Nav>
    </>
  );
};
export default SideBar;
