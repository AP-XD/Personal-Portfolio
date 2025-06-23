import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Version control.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              <span className="first-word">INTRODUCING</span>{" "}
              <span className="blue"> MYSELF </span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              Hi, I&apos;m <strong className="blue">Arka</strong> — a Platform &
              Systems Engineer at
              <strong className="blue"> Hewlett Packard Enterprise</strong>,
              passionate about solving real-world problems through code.
              <br />
              <br />
              From building robust cloud-native services to pushing limits in
              competitive programming, I craft resilient software with purpose.
              Whether it&apos;s scaling
              <strong className="blue"> Kubernetes clusters</strong>,
              contributing to
              <strong className="blue"> open source</strong>, or optimizing
              microservices with
              <strong className="blue"> Istio and Prometheus</strong> — I live
              for technical challenges that drive real impact.
              <br />
              <br />
              My expertise spans across{" "}
              <strong className="blue">
                DevOps, Cloud Infrastructure, and Systems Programming
              </strong>{" "}
              with hands-on experience in
              <i>
                <b className="blue">
                  {" "}
                  Kubernetes, Docker, Helm, and Prometheus
                </b>
              </i>
              <br />
              <br />
              I&apos;m proficient in{" "}
              <i>
                <b className="blue">C++, Python, JavaScript, and Go </b>
              </i>
              and love tackling algorithmic challenges on platforms like
              <strong className="blue"> Codeforces and LeetCode</strong>.
            </p>
          </Col>{" "}
          <Col md={4} className="Avtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
