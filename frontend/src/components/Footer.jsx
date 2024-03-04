import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container fluid>
        <Row className="bg-dark py-4 text-light">
          <Col className="text-center">
            <h4>
              Copyright &copy;
              <span className="text-warning">Shop-at-home</span>
            </h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
