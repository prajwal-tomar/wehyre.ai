import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const CustomNavbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg p-2">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          wehyre.ai
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold fs-6">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
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
          {isAuthenticated ? (
            <li>
              <Button
                variant="danger"
                onClick={() => logout({ returnTo: window.location.origin })}
                className="ms-2"
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button className="ms-2" onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            </li>
          )}
        </ul>
      </div>
      {isAuthenticated ? (
        <div className="flex justify-center align-items-center mx-auto">
          <p className="mr-4 mb-0">Welcome, {user.name}</p>
          <div className="rounded-circle overflow-hidden">
            {" "}
            <img
              src={user.picture}
              alt={user.name}
              style={{ width: "50px", height: "50px" }}
            />{" "}
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default CustomNavbar;
