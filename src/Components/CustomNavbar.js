import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    // <Container>
    //   <Navbar bg="light" expand="lg" sticky="top">
    //     <Navbar.Brand as={Link} to="/">
    //       {/* <img src="your-logo.png" alt="wehyre.ai" /> */}
    //       wehyre.ai
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbar-nav" />
    //     <Navbar.Collapse id="navbar-nav">
    //       <Nav className="ml-auto">
    //         <Nav.Link as={Link} to="/" exact>
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/job-listings">
    //           Job Listings
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/cv-upload">
    //           CV Upload
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/employer-portal">
    //           Employer Portal
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/about-us">
    //           About Us
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </Container>
    <nav className="navbar navbar-light bg-light navbar-expand-lg p-2">
      <div className="container">
        <Link to="/" exact className="navbar-brand fw-bold">
          wehyre.ai
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold fs-6">
        <li className="nav-item">
            <Link to="/" exact className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/employers-home" className="nav-link">
              For Employers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
