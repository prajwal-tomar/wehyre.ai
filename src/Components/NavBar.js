import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className="scrolled">
      {/* className={scrolled ? "scrolled" : ""} */}
      <Container>
        <Navbar.Brand href="/" style={{ width: "130px" }}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            {/* <Nav.Link
              href="/employers-home"
              className={` 'mx-0' ${
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }`}
              onClick={() => onUpdateActiveLink("foremployers")}
            >
              For Employers
            </Nav.Link> */}
            <Nav.Link
              href="/about-us"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutus")}
            >
              About Us
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/company/wehyre-ai/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.facebook.com/wehyreai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a
                href="https://www.instagram.com/wehyre.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="" />
              </a>
            </div>
            {isAuthenticated ? (
              <button
                className="vvd"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <span>Log Out</span>
              </button>
            ) : (
              <button className="vvd" onClick={() => loginWithRedirect()}>
                <span>Login in</span>
              </button>
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
