import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";
import "./Projects.css";

function ProjectCards({ item }) {
  return (
    <motion.div
      className="project-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: 0.1,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="project-image">
        <img src={item.image} alt={item.name} style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover'
          }}/>
      </div>
      <div className="project-details">
        <div className="project-title">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="project-stacks">
          <div className="stacks">
            {item.techStack.map((tech) => {
              return (
                <p key={tech} className="tech-stack">
                  {tech}
                </p>
              );
            })}
          </div>
          <div className="project-btns">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="code-btn"
            >
              <CodeIcon className="code-icon" />
            </a>
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              <LanguageIcon className="live-icon" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCards;
