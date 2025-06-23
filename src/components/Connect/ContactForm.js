import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { userData } from "../../constants/userData";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (name && email && message) {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;

      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          if (response.status === 200) {
            setEmailSent(true);
            setTimeout(() => {
              setEmailSent(false);
            }, 10000);
          } else {
            alert("Failed to send Email!");
          }
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
          console.log("response", response);
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to send Email!");
          setIsLoading(false);
        });
    } else {
      alert("Please fill in all fields.");
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="contact-form-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <motion.div
              className="contact-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="grid-mask"></div>

              <Row className="align-items-center">
                <Col lg={6} className="contact-left">
                  <motion.div
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="left-details">
                      <h2>
                        <WavingHandIcon className="hello-icon" />{" "}
                        {userData.contactData.salutation},
                      </h2>
                      <h2>{userData.contactData.subTitle}</h2>
                    </div>

                    <div className="left-email">
                      <EmailIcon className="email-icon" />
                      <div className="email-text">
                        <p>{userData.contactData.emailDesc}</p>
                        <a href="mailto:arkamtg.pramanik@gmail.com">
                          arkamtg.pramanik@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="left-socials">
                      <p>Socials : </p>
                      <a
                        href="https://www.linkedin.com/in/arka--pramanik/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {userData.contactData.linkedin}
                      </a>
                      <a
                        href="https://github.com/AP-XD"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {userData.contactData.github}
                      </a>
                    </div>
                  </motion.div>
                </Col>

                <Col lg={6} className="contact-right">
                  <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-form-container">
                      <div className="form-title">
                        <h2>{userData.contactData.title}</h2>
                        <RocketLaunchIcon className="rocket-icon" />
                      </div>

                      <Form onSubmit={submitForm}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="contact-input"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="contact-input"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="contact-input"
                          />
                        </Form.Group>

                        <Button
                          type="submit"
                          disabled={emailSent || isLoading}
                          className="send-btn"
                        >
                          {isLoading
                            ? "Sending..."
                            : emailSent
                              ? "Sent!"
                              : "Send"}{" "}
                          {!emailSent && !isLoading && (
                            <SendIcon className="send-icon" />
                          )}
                        </Button>
                      </Form>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {emailSent && (
        <motion.div
          className="notification"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Email sent successfully!
        </motion.div>
      )}
    </Container>
  );
}

export default ContactForm;
