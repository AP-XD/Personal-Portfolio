import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import HPE from "../../Assets/Projects/HPE.png";
import arrow from "../../Assets/Projects/arrow.jpg";
import enconnect from "../../Assets/Projects/enconnect.jpg";
import tuition from "../../Assets/Projects/tuition.jpg";
import habify from "../../Assets/Projects/habify.jpg";
import nlp from "../../Assets/Projects/nlp.png";
import weather from "../../Assets/Projects/weather.png";
import Netflix from "../../Assets/Projects/Netflix.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "space-around", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HPE}
              title="HPC Security Dashboard"
              description="Enhance Kubernetes security monitoring with integrated Kube Bench and Trivy, enabling visualization of metrics in Prometheus and Grafana for actionable insights and improved security posture."
              link="https://github.com/AP-XD/HPE-CTY-HPC-Security-Dashboard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tuition}
              title="Online Tuition Management System"
              description="A web app that helps the student and teachers to find, manage and organize local tuition centers."
              link="https://github.com/AP-XD/SWE-J-Component"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arrow}
              title="Device Tree"
              description="ASUS Max M2 (X01AD) Device Tree Source Code for building Arrow OS Custom ROM. "
              link="https://github.com/AP-XD/device_asus_X01AD"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "space-around", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={habify}
              title="Habify"
              description="Our Habit Tracker App that helps you to be more disciplined and form good habits to be more productive."
              link="https://github.com/AP-XD/Habify"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={enconnect}
              title="Enconnect"
              description="Our project aims in helping make chats the private way by encrypting and decrypting with standard algorithms and using multiple algorithms in same process which provides security and attack free."
              link="https://github.com/AP-XD/EnConnect"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nlp}
              title="Youtube Analyser"
              description="Our app provides you with a crisp description for your youtube video by using various algorithms."
              link="https://github.com/AP-XD/CSE4022-Project"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "space-around", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title="Weather App"
              description="Beginner Project: Displays weather of a city using OPEN WEATHER API."
              link="https://github.com/AP-XD/EnConnect"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              title="Netflix Clone"
              description="Beginner Project: Netflix Clone built using React.js, and Firebase. Fetches latest trending movies from TMDB API."
              link="https://github.com/AP-XD/Netflix-clone"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={habify}
              title="Habify"
              description="Our Habit Tracker App that helps you to be more disciplined and form good habits to be more productive."
              link="https://github.com/AP-XD/Habify"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
