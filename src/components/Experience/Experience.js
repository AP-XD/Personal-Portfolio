import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Arka_Pramanik_s_Latest_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

// Import company logos
import tcsLogo from "../../Assets/tcs-logo.svg";
import srmLogo from "../../Assets/srm-logo.svg";
import freelanceLogo from "../../Assets/freelance-logo.svg";

// Import tech stack icons
// Skill icons imports from organized Assets folder
import htmlIcon from "../../Assets/Skills/frontend/html.svg";
import cssIcon from "../../Assets/Skills/frontend/css.svg";
import jsIcon from "../../Assets/Skills/programming-languages/js.svg";
import reactIcon from "../../Assets/Skills/frontend/react.png";
import nodeIcon from "../../Assets/Skills/backend/nodejs.svg";
import pythonIcon from "../../Assets/Skills/programming-languages/py.svg";
import javaIcon from "../../Assets/Skills/programming-languages/java.svg";
import cppIcon from "../../Assets/Skills/programming-languages/cpp.svg";
import gitIcon from "../../Assets/Skills/tools/git.svg";
import githubIcon from "../../Assets/Skills/tools/github.svg";
import nextIcon from "../../Assets/Skills/frontend/next.svg";
import tsIcon from "../../Assets/Skills/programming-languages/ts.svg";
import firebaseIcon from "../../Assets/Skills/backend/firebase.svg";
import expressIcon from "../../Assets/Skills/backend/express.svg";
import tailwindIcon from "../../Assets/Skills/frontend/tailwind.svg";
import vsCodeIcon from "../../Assets/Skills/tools/vscode.svg";

// Experience data based on Arka Pramanik's experience
const experienceData = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    position: "Systems Engineer",
    duration: "Jul 2022 - Present",
    logo: tcsLogo,
    descriptions: [
      "Worked as a full-stack developer on enterprise-level applications using modern web technologies.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Participated in agile development processes and contributed to code reviews and technical discussions.",
      "Developed and maintained web applications with focus on performance and user experience."
    ],
    techStack: [
      { name: "React", icon: reactIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "Git", icon: gitIcon },
      { name: "Python", icon: pythonIcon },
      { name: "Java", icon: javaIcon }
    ]
  },
  {
    id: 2,
    company: "Freelance Projects",
    position: "Full-Stack Developer",
    duration: "2021 - Present",
    logo: freelanceLogo,
    descriptions: [
      "Developed multiple full-stack web applications using React, Node.js, and modern JavaScript frameworks.",
      "Created responsive and user-friendly interfaces with attention to design and user experience.",
      "Built RESTful APIs and integrated third-party services for various client projects.",
      "Worked with databases and implemented secure authentication systems."
    ],
    techStack: [
      { name: "React", icon: reactIcon },
      { name: "Next.js", icon: nextIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "Firebase", icon: firebaseIcon },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "Git", icon: gitIcon }
    ]
  }
];

// Education data based on Arka Pramanik's experience
const educationData = [
  {
    id: 1,
    institution: "SRM Institute of Science & Technology",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2018 - 2022",
    logo: srmLogo,
    descriptions: [
      "Completed Bachelor's degree in Computer Science and Engineering with strong foundation in programming and software development.",
      "Gained expertise in data structures, algorithms, and software engineering principles.",
      "Participated in various coding competitions and technical projects.",
      "Developed strong problem-solving skills and collaborative teamwork abilities."
    ],
    courses: [
      { name: "Data Structures", icon: cppIcon },
      { name: "Algorithms", icon: pythonIcon },
      { name: "Database Systems", icon: javaIcon },
      { name: "Web Development", icon: jsIcon },
      { name: "Software Engineering", icon: htmlIcon },
      { name: "Computer Networks", icon: cssIcon },
      { name: "Operating Systems", icon: gitIcon },
      { name: "Programming", icon: vsCodeIcon }
    ]
  }
];

function ExperienceNew() {
  const [activeTab, setActiveTab] = useState("experience");
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeEducation, setActiveEducation] = useState(0);
  const experienceRefs = useRef([]);
  const educationRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (activeTab === "experience") {
        experienceRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight / 2;
            if (isVisible && activeExperience !== index) {
              setActiveExperience(index);
            }
          }
        });
      } else {
        educationRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.top <= window.innerHeight / 2;
            if (isVisible && activeEducation !== index) {
              setActiveEducation(index);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, activeExperience, activeEducation]);

  const renderExperienceItem = (item, index) => (
    <div
      key={item.id}
      ref={el => experienceRefs.current[index] = el}
      className={`experience-group ${activeExperience === index ? 'active' : 'dimmed'}`}
      style={{ marginBottom: '4rem' }}
    >
      <div className="timeline-container">
        {/* Company Logo Circle and Header */}
        <div className="timeline-header">
          <div className="timeline-logo-circle">
            <img src={item.logo} alt={`${item.company} logo`} />
          </div>
          <div className="timeline-header-content">
            <h3 className="company-name">{item.company}</h3>
            <p className="position-duration">{item.position} | {item.duration}</p>
          </div>
        </div>
        
        {/* Description Points with Small White Circles */}
        <div className="timeline-descriptions">
          {item.descriptions.map((desc, i) => (
            <div key={i} className="timeline-point">
              <div className="timeline-small-circle"></div>
              <div className="timeline-point-content">
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only Tech Stack */}
        <div className="mobile-tech-stack">
          <h4 className="mobile-tech-stack-title">Tech Stack</h4>
          <div className="mobile-tech-stack-grid">
            {item.techStack.map((tech, techIndex) => (
              <div key={techIndex} className="mobile-tech-item">
                <div className="tech-icon">
                  <img src={tech.icon} alt={tech.name} />
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEducationItem = (item, index) => (
    <div
      key={item.id}
      ref={el => educationRefs.current[index] = el}
      className={`experience-group ${activeEducation === index ? 'active' : 'dimmed'}`}
      style={{ marginBottom: '4rem' }}
    >
      <div className="timeline-container">
        {/* Institution Logo Circle and Header */}
        <div className="timeline-header">
          <div className="timeline-logo-circle">
            <img src={item.logo} alt={`${item.institution} logo`} />
          </div>
          <div className="timeline-header-content">
            <h3 className="company-name">{item.institution}</h3>
            <p className="position-duration">{item.degree} | {item.duration}</p>
          </div>
        </div>
        
        {/* Description Points with Small White Circles */}
        <div className="timeline-descriptions">
          {item.descriptions.map((desc, i) => (
            <div key={i} className="timeline-point">
              <div className="timeline-small-circle"></div>
              <div className="timeline-point-content">
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Courses & Skills Section */}
        <div className="mobile-tech-stack">
          <h4 className="mobile-tech-stack-title">Courses & Skills</h4>
          <div className="mobile-tech-stack-grid">
            {item.courses.map((course, courseIndex) => (
              <div key={courseIndex} className="mobile-tech-item">
                <div className="tech-icon">
                  <img src={course.icon} alt={course.name} />
                </div>
                <span className="tech-name">{course.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechStack = () => {
    const currentData = activeTab === "experience" ? experienceData : educationData;
    const activeIndex = activeTab === "experience" ? activeExperience : activeEducation;
    const currentItem = currentData[activeIndex];

    if (!currentItem) return null;

    const stackItems = activeTab === "experience" ? currentItem.techStack : currentItem.courses;
    const title = activeTab === "experience" ? "Tech Stack" : "Courses & Skills";

    return (
      <div className="tech-stack-section">
        <h4 className="tech-stack-title">{title}</h4>
        <div className="tech-stack-grid">
          {stackItems.map((item, index) => (
            <div key={index} className="tech-item">
              <div className="tech-icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <span className="tech-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Container fluid className="experience-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Col md={12} className="text-center">
              <h1 className="project-heading">
                MY <strong className="blue">EXPERIENCE</strong>
              </h1>
              <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1.1rem", marginBottom: "2rem" }}>
                A glimpse into my academic and professional experience, shaping my growth in the tech world.
              </p>
            </Col>
          </Row>
          
          {/* Download Resume Button */}
          <Row style={{ justifyContent: "center", position: "relative", marginBottom: "3rem" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Row>

          {/* Tab Buttons */}
          <Row style={{ justifyContent: "center", marginBottom: "3rem" }}>
            <Col md={8} className="text-center">
              <div className="tab-buttons">
                <button
                  className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </button>
                <button
                  className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
                  onClick={() => setActiveTab("education")}
                >
                  Education
                </button>
              </div>
            </Col>
          </Row>

          {/* Content Area */}
          <Row>
            <Col lg={7} md={12} className="experience-timeline">
              {activeTab === "experience" 
                ? experienceData.map((item, index) => renderExperienceItem(item, index))
                : educationData.map((item, index) => renderEducationItem(item, index))
              }
            </Col>
            {/* Desktop Tech Stack Column - only visible on desktop */}
            <Col lg={5} className="tech-stack-container d-none d-lg-block">
              {renderTechStack()}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ExperienceNew;
