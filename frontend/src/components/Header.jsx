import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Cart3 } from "react-bootstrap-icons";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container className="py-2">
          <LinkContainer to="/">
            <Navbar.Brand
              className="text-warning"
              style={{ fontWeight: "bold" }}
            >
              Shop-at-home
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                {" "}
                <Nav.Link>
                  <Cart3 />
                  <span className="px-1">Cart</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Sign in</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
