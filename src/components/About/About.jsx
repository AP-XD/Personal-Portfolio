import React from "react";
import { Container } from "react-bootstrap";
import Skills from "./Skills";
import CodingProfiles from "./CodingProfiles";
import "./Skills.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Skills />
      <CodingProfiles />
    </Container>
  );
}

export default About;
