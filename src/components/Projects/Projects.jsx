import React, { useMemo } from "react";
import { userData } from "../../constants/userData";
import ProjectCard from "./ProjectCards";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  
  const projects = useMemo(() => userData?.projectsData?.projects || [], []);

  return (
    <div className="projects" id="projects">
      <div className="projects-content">
        <motion.div
          className="projects-content-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="section-title">
            <span className="first-word">MY</span> RECENT WORKS
          </h1>
        </motion.div>
        <motion.div
          className="projects-content-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="section-desc">{userData.projectsData.desc}</p>
        </motion.div>
        <div className="projects-content-items">
          {projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
