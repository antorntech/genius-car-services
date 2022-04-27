import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="py-3"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Blog-1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog-2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Blog-3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Blog-4</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <Nav.Link as={Link} to="/addservice">
                  Add Service
                </Nav.Link>
              ) : (
                <div className="d-none"></div>
              )}
              {user ? (
                <Nav.Link as={Link} to="/manageservices">
                  Manage Service
                </Nav.Link>
              ) : (
                <div className="d-none"></div>
              )}
              {user ? (
                <Nav.Link as={Link} to="/orders">
                  Orders
                </Nav.Link>
              ) : (
                <div className="d-none"></div>
              )}
              {user ? (
                <Button className="signOut-btn" onClick={handleSignOut}>
                  SignOut
                </Button>
              ) : (
                <Nav.Link eventKey={2} as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
