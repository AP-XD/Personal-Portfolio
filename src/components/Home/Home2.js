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
              INTRODUCING <span className="blue"> MYSELF </span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I love to do Competitive Programming and solve Real-World
              Problems.
              <br />
              <br />I am fluent in Languages like
              <i>
                <b className="blue"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="blue">Web Technologies and Products </b> and I am
                exploring <b className="blue">Machine Learning.</b>
              </i>
              <br />
              <br />I also develop products using with{" "}
              <b className="blue">Node.js</b> and
              <i>
                <b className="blue">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="blue"> React.js</b>
              </i>
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
