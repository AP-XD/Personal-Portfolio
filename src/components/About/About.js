import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Skills from "./Skills";
import "./Skills.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Skills />
    </Container>
  );
}

export default About;
