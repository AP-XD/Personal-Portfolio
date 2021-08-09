import { Col, Row } from "react-bootstrap";
import fb from "./svg/firebase.svg";
import nodejs from "./svg/nodejs.svg";
import expressjs from "./svg/express.svg";

function Backend() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={fb} alt="firebase" />
        <h3>Firebase</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={nodejs} alt="nodejs" />
        <h3>Node JS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={expressjs} alt="expressjs" />
        <h3>Express JS</h3>
      </Col>
    </Row>
  );
}

export default Backend;
