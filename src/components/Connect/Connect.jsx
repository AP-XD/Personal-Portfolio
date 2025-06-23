import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Particle from "../Particle";
import ContactForm from "./ContactForm";
import "./ContactForm.css";
import arkaImage from "../../Assets/Arka.png";

function Connect() {
  return (
    <Container fluid className="connect-section" id="connect">
      <Particle />
      <Container>
        {/* Connect Heading */}
        <Row className="connect-heading-row">
          <Col md={12} className="text-center">
            <h1 className="project-heading">
              <span className="first-word">🫱🏻‍🫲🏼</span>{" "}
              <span className="first-word">CONNECT</span> WITH ME
            </h1>
          </Col>
        </Row>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Profile Image and Social Icons */}
        <div className="connect-profile-section">
          <img
            src={arkaImage}
            alt="Arka Pramanik"
            className="connect-profile-image"
          />

          {/* Modern Social Icons */}
          <div className="connect-social-icons">
            <a
              href="https://www.linkedin.com/in/arka--pramanik/"
              target="_blank"
              rel="noreferrer"
              className="connect-social-icon linkedin"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/AP-XD"
              target="_blank"
              rel="noreferrer"
              className="connect-social-icon github"
            >
              <AiOutlineGithub />
            </a>

            <a
              href="https://tx.me/AP_XD"
              target="_blank"
              rel="noreferrer"
              className="connect-social-icon telegram"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://www.instagram.com/p__arka"
              target="_blank"
              rel="noreferrer"
              className="connect-social-icon instagram"
            >
              <AiOutlineInstagram />
            </a>

            <a
              href="mailto:arkamtg.pramanik@gmail.com"
              className="connect-social-icon email"
            >
              <MdOutlineEmail />
            </a>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Connect;
