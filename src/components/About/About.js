import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Skills from "./Skills";
import CodingProfiles from "./CodingProfiles";
import "./Skills.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Skills />
      <CodingProfiles />
    </Container>
  );
}

export default About;
