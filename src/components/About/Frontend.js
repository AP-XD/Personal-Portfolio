import React from "react";
import { Col, Row } from "react-bootstrap";
import html from "./svg/html.svg";
import css from "./svg/css.svg";
import react from "./svg/react.png";
import bs from "./svg/bs.svg";

function Frontend() {
  return (
    <Row className="justify-content-center">
      <Col xs={6} md={3} className="tech-icons">
        <img src={html} alt="html" />
        <h3>HTML</h3>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={css} alt="css" />
        <h3>CSS</h3>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={react} alt="react" />
        <h3>React</h3>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={bs} alt="bootstrap" />
        <h3>Bootstrap</h3>
      </Col>
    </Row>
  );
}

export default Frontend;
