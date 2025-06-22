import React from "react";
import { Col, Row } from "react-bootstrap";
import vs from "./svg/vscode.svg";
import git from "./svg/github.png";
import kube from "./svg/Kubernetes_logo_without_workmark.svg.png";
import linux from "./svg/linux.svg";

function Tools() {
  return (
    <Row className="justify-content-center">
      <Col xs={6} md={3} className="tech-icons">
        <img src={vs} alt="vs" />
        <h3>VS Code</h3>
      </Col>
      <Col
        xs={6}
        md={3}
        className="tech-icons"
        style={{ position: "relative" }}
      >
        <img src={git} alt="git" />
        <h3>Github</h3>
        <a
          href="https://github.com/AP-XD"
          target="_blank"
          rel="noreferrer"
          className="stretched-link"
          aria-label="Visit GitHub profile"
        ></a>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={kube} alt="Kubernetes" />
        <h3>Kubernetes</h3>
      </Col>
      <Col xs={6} md={3} className="tech-icons">
        <img src={linux} alt="linux" />
        <h3>Linux</h3>
      </Col>
    </Row>
  );
}

export default Tools;
