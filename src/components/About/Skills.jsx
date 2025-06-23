import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { userData } from "../../constants/userData";

const Skills = () => {
  return (
    <Container fluid className="skills-section">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="project-heading">
                <span className="first-word">MY</span>{" "}
                <span className="blue"> TECH STACK & EXPERTISE </span>
              </h1>
            </motion.div>
            <motion.p
              className="skills-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {userData.skillsData.desc}
            </motion.p>
          </Col>
        </Row>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="skills-content-items">
            {userData.skillsData?.technologies?.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  className="skill-card-wrapper"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.2,
                    delay: Math.min(0.8 + index * 0.05, 1.5),
                    type: "tween",
                    ease: "easeOut",
                  }}
                >
                  <SkillCard item={item} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Skills;
