import React from "react";
import { Col, Row } from "react-bootstrap";
import codechef from "./svg/codechef.png";
import cf from "./svg/Codeforces.colored.svg";
import lt from "./svg/LeetCode_logo_black.png";
import hack from "./svg/hackerrank.svg";

function CP() {
  return (
    <Row className="justify-content-center">
      <Col xs={6} md={4} className="tech-icons">
        <img src={lt} alt="leetcode" />
        <h3>Leetcode</h3>
        <a
          href="https://leetcode.com/Arka_2910"
          target="_blank"
          rel="noreferrer"
          className="stretched-link"
          aria-label="Visit Leetcode profile"
        ></a>
      </Col>
      <Col xs={6} md={4} className="tech-icons">
        <img src={cf} alt="codeforces" />
        <h3>Codeforces</h3>
        <a
          href="https://codeforces.com/profile/AP_XD"
          target="_blank"
          rel="noreferrer"
          className="stretched-link"
          aria-label="Visit Codeforces profile"
        ></a>
      </Col>
      <Col xs={6} md={4} className="tech-icons">
        <img src={codechef} alt="codechef" />
        <h3>Codechef</h3>
        <a
          href="https://www.codechef.com/users/ap_2910"
          target="_blank"
          rel="noreferrer"
          className="stretched-link"
          aria-label="Visit Codechef profile"
        ></a>
      </Col>
      <Col xs={6} md={4} className="tech-icons">
        <img src={hack} alt="hackerrank" />
        <h3>Hackerrank</h3>
        <a
          href="https://www.hackerrank.com/ARKA_2910"
          target="_blank"
          rel="noreferrer"
          className="stretched-link"
          aria-label="Visit Hackerrank profile"
        ></a>
      </Col>
    </Row>
  );
}

export default CP;
