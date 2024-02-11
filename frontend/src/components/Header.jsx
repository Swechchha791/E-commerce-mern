import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cart3 } from "react-bootstrap-icons";
import { Basket2Fill } from "react-bootstrap-icons";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Container className="py-2">
          <Navbar.Brand
            className="text-warning d-flex align-items-center"
            style={{ fontWeight: "bold" }}
            as={Link}
            to="/"
          >
            <Basket2Fill className="mx-2" />
            Shop-at-home
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <Cart3 />
                <span className="px-1">Cart</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
