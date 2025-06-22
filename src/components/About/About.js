import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Languages from "./Languages";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import CP from "./CP";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {" "}
        <Row>
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              MY <span className="blue"> SKILLS & EXPERTISE </span>
            </h1>
          </Col>
        </Row>
        <Row className="skill-section">
          <Col md={6}>
            <div className="skill-category">
              <h2 className="skill-heading">Programming Languages</h2>
              <Languages />
            </div>
          </Col>
          <Col md={6}>
            <div className="skill-category">
              <h2 className="skill-heading">Tools & Technologies</h2>
              <Tools />
            </div>
          </Col>
        </Row>
        <Row className="skill-section">
          <Col md={6}>
            <div className="skill-category">
              <h2 className="skill-heading">Frontend Development</h2>
              <Frontend />
            </div>
          </Col>
          <Col md={6}>
            <div className="skill-category">
              <h2 className="skill-heading">Backend Development</h2>
              <Backend />
            </div>
          </Col>
        </Row>
        <Row className="skill-section justify-content-center">
          <Col md={8}>
            <div className="skill-category text-center">
              <h2 className="skill-heading">Competitive Programming</h2>
              <CP />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
