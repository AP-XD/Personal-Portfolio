import React from "react";
import { Col, Row } from "react-bootstrap";
import cpp from "./svg/cpp.svg"
import js from "./svg/js.svg"
import java from "./svg/java.svg"
import py from "./svg/py.svg"

function Languages() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={cpp} alt="c++"  /><h3>C++</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={py} alt="python" /><h3>Python</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={java} alt="java"  /><h3>Java</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={js} alt="js" /><h3>Javascript</h3>
      </Col>
    </Row>
  );
}

export default Languages;
