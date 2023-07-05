import React from "react";
import { Col, Row } from "react-bootstrap";
import codechef from "./svg/codechef.png";
import cf from "./svg/Codeforces.colored.svg";
import lt from "./svg/LeetCode_logo_black.png";
import hack from "./svg/hackerrank.svg";

function CP() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        style={{ transform: "rotate(0)" }}
      >
        <img src={lt} alt="leetcode" />
        <h3>Leetcode</h3>
        <a
          href="https://leetcode.com/Arka_2910"
          target="_blank"
          rel="noreferrer"
          className="stretched-link"
        ></a>
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        style={{ transform: "rotate(0)" }}
      >
        <img src={cf} alt="cf" />
        <h3>Codeforces</h3>
        <a
          href="https://codeforces.com/profile/AP_XD"
          target="_blank"
          rel="noreferrer"
          className="stretched-link"
        ></a>
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons"
        style={{ transform: "rotate(0)" }}
      >
        <img src={codechef} alt="codechef" />
        <h3>Codechef</h3>
        <a
          href="https://www.codechef.com/users/ap_2910"
          target="_blank"
          rel="noreferrer"
          className="stretched-link"
        ></a>
      </Col>

      <Col
        xs={4}
        md={2}
        className="tech-icons"
        style={{ transform: "rotate(0)" }}
      >
        <img src={hack} alt="hackerrank" />
        <h3>Hackerrank</h3>
        <a
          href="https://www.hackerrank.com/ARKA_2910"
          target="_blank"
          rel="noreferrer"
          className="stretched-link"
        ></a>
      </Col>
    </Row>
  );
}

export default CP;
