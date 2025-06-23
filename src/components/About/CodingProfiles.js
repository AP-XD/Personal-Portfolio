import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import CodingProfileCard from "./CodingProfileCard";

// Import coding platform logos
import leetcode from "../../Assets/Skills/coding-profiles/LeetCode_logo_black.png";
import codeforces from "../../Assets/Skills/coding-profiles/Codeforces.colored.svg";
import codechef from "../../Assets/Skills/coding-profiles/codechef.png";
import hackerrank from "../../Assets/Skills/coding-profiles/hackerrank.svg";

const CodingProfiles = () => {
  const codingProfiles = [
    {
      id: 1,
      name: "LeetCode",
      type: "Competitive Programming",
      image: leetcode,
      url: "https://leetcode.com/Arka_2910",
    },
    {
      id: 2,
      name: "Codeforces",
      type: "Competitive Programming",
      image: codeforces,
      url: "https://codeforces.com/profile/AP_XD",
    },
    {
      id: 3,
      name: "CodeChef",
      type: "Competitive Programming",
      image: codechef,
      url: "https://www.codechef.com/users/ap_2910",
    },
    {
      id: 4,
      name: "HackerRank",
      type: "Competitive Programming",
      image: hackerrank,
      url: "https://www.hackerrank.com/ARKA_2910",
    },
  ];

  return (
    <Container fluid className="coding-profiles-section">
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
                <span className="blue"> CODING PROFILES </span>
              </h1>
            </motion.div>
            <motion.p
              className="skills-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Check out my competitive programming profiles and coding journey
              across various platforms.
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
            {codingProfiles.map((profile, index) => {
              return (
                <motion.div
                  key={profile.id}
                  className="skill-card-wrapper"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <CodingProfileCard profile={profile} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </Container>
  );
};

export default CodingProfiles;
