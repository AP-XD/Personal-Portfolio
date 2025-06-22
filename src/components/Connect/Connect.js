import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Particle from "../Particle";

function Connect() {
  return (
    <Container fluid className="connect-section" id="connect">
      <Particle />
      <Container>
        {/* Social Media Links */}
        <Row className="social-media-row">
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              <span className="wave">🫱🏻‍🫲🏼</span>{" "}
              <span className="blue">CONNECT</span> WITH ME
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AP-XD"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://tx.me/AP_XD"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arka--pramanik/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/p__arka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:arkamtg.pramanik@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Connect;
