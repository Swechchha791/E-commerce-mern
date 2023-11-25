import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Cart3 } from "react-bootstrap-icons";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" className="text-warning">
            Shop-at-home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <Cart3 />
                <span className="px-1">Cart</span>
              </Nav.Link>
              <Nav.Link href="/login">Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
