import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Arka_Pramanik_s_Latest_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

// Import company logos
import hpeLogo from "../../Assets/logos/companies/HPE-logo-black.png";
import arrowLogo from "../../Assets/logos/companies/arrowos-logo.png";
import vitLogo from "../../Assets/logos/education/Vellore_Institute_of_Technology_logo.png";
import stStephensLogo from "../../Assets/logos/education/ststephens-logo.png";

// Import tech stack icons
// Skill icons imports from organized Assets folder
import jsIcon from "../../Assets/Skills/programming-languages/js.svg";
import reactIcon from "../../Assets/Skills/frontend/react.png";
import nodeIcon from "../../Assets/Skills/backend/nodejs.svg";
import pythonIcon from "../../Assets/Skills/programming-languages/py.svg";
import cppIcon from "../../Assets/Skills/programming-languages/cpp.svg";
import gitIcon from "../../Assets/Skills/tools/git.svg";
import githubIcon from "../../Assets/Skills/tools/github.svg";
import sqlIcon from "../../Assets/Skills/backend/sql.png";
import kubernetesIcon from "../../Assets/Skills/devops/kubernetes.png";
import prometheusIcon from "../../Assets/Skills/devops/prometheus.svg";
import grafanaIcon from "../../Assets/Skills/devops/grafana.svg";
import helmIcon from "../../Assets/Skills/devops/helm.svg";
import azureIcon from "../../Assets/Skills/cloud/azure.svg";
import linuxIcon from "../../Assets/Skills/tools/linux.svg";
import kubebenchIcon from "../../Assets/Skills/devops/kube-bench.png";
import trivyIcon from "../../Assets/Skills/devops/trivy.png";
import androidIcon from "../../Assets/icons/tools/Android-Logo.png";
import makefileIcon from "../../Assets/icons/tools/makefile.webp";
import bashIcon from "../../Assets/icons/tools/bash.png";
import networkIcon from "../../Assets/icons/tools/computer-networking.png";
import osIcon from "../../Assets/icons/tools/os.webp";
import mathIcon from "../../Assets/icons/subjects/maths.avif";
import physicsIcon from "../../Assets/icons/subjects/phys.jpg";
import chemistryIcon from "../../Assets/icons/subjects/chem.jpg";
import englishIcon from "../../Assets/icons/subjects/eng.jpg";
import problemSolvingIcon from "../../Assets/icons/subjects/problem-solving.jpg";
import istioIcon from "../../Assets/Skills/devops/istio.svg";
import kialiIcon from "../../Assets/Skills/devops/kiali.png";
// Experience data based on Arka Pramanik's resume
const experienceData = [
  {
    id: 1,
    company: "Hewlett Packard Enterprise",
    position: "Systems/Software Engineer 1",
    duration: "Sep 2024 - Present",
    logo: hpeLogo,
    descriptions: [
      "Developing rack-level resiliency features in Cray System Management stack for predictive fault handling and automated recovery in large-scale HPC environments.",
      "Contributing to Rack Resiliency Service (RRS) — a system-critical platform ensuring high availability through health monitoring, zone-level state transitions, and event-driven recovery.",
      "Led secure production upgrade of Istio service mesh from v1.19.10 to v1.26.0, resolving CVEs and enabling ambient mesh, proxyless telemetry, and enhanced sidecar performance.",
      "Upgraded Kiali observability dashboard ensuring compatibility with new Istio control plane and improving mesh visualization for developers and SREs.",
      "Collaborating with global teams on cloud-native orchestration, CI/CD automation, and DevSecOps adoption in containerized supercomputing environments.",
    ],
    techStack: [
      { name: "Kubernetes", icon: kubernetesIcon },
      { name: "Istio", icon: istioIcon },
      { name: "Kiali", icon: kialiIcon },
      { name: "Helm", icon: helmIcon },
      { name: "Prometheus", icon: prometheusIcon },
      { name: "Grafana", icon: grafanaIcon },
      { name: "Python", icon: pythonIcon },
      { name: "Git", icon: gitIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Linux", icon: linuxIcon },
    ],
  },
  {
    id: 2,
    company: "Hewlett Packard Enterprise",
    position: "HPC Software Engineer Intern",
    duration: "Feb 2024 - Aug 2024",
    logo: hpeLogo,
    descriptions: [
      "Worked as HPC Software Engineer Intern at HPE Bengaluru, Karnataka, India.",
      "Part of the Platforms Team under the Cray System Management Product.",
      "Successfully upgraded Istio (Kubernetes Service Mesh) from version 1.11.8 to 1.19.10.",
      "This upgrade addressed multiple security vulnerabilities, ensuring a more secure environment.",
      "Enabled new features to enhance customer capabilities and operational efficiency.",
    ],
    techStack: [
      { name: "Kubernetes", icon: kubernetesIcon },
      { name: "Istio", icon: istioIcon },
      { name: "Kiali", icon: kialiIcon },
      { name: "Trivy Operator", icon: trivyIcon },
      { name: "Prometheus", icon: prometheusIcon },
      { name: "Helm", icon: helmIcon },
      { name: "Grafana", icon: grafanaIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Git", icon: gitIcon },
    ],
  },

  {
    id: 3,
    company: "Hewlett Packard Enterprise",
    position: "HPE CTY Summer Intern",
    duration: "Jan 2023 - Jun 2023",
    logo: hpeLogo,
    descriptions: [
      "Developed centralized security dashboard for monitoring Kubernetes security aspects in HPC environments.",
      "Implemented exporter service to export security metrics to Grafana for real-time monitoring and alerting.",
      "Created detailed remediation steps for various security tests, enabling efficient resolution of security vulnerabilities.",
      "Gained hands-on experience with cloud-native technologies and security monitoring solutions in enterprise environments.",
      "Collaborated with cross-functional teams to enhance security posture of containerized workloads.",
    ],
    techStack: [
      { name: "Kubernetes", icon: kubernetesIcon },
      { name: "Kube Bench", icon: kubebenchIcon },
      { name: "Trivy Operator", icon: trivyIcon },
      { name: "Prometheus", icon: prometheusIcon },
      { name: "Helm", icon: helmIcon },
      { name: "Grafana", icon: grafanaIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "JavaScript", icon: jsIcon },
    ],
  },
  {
    id: 4,
    company: "Arrow OS",
    position: "Device Maintainer",
    duration: "Feb 2021 - Aug 2022",
    logo: arrowLogo,
    descriptions: [
      "Working on supporting the Asus Max M2 (SDM632 Platform) for Android 12.",
      "Improved overall user experience by working on device side semantics and performance improvements.",
      "Collaborated with the open-source community to maintain and develop custom Android ROMs.",
      "Gained expertise in Android development, Linux kernel modifications, and build systems.",
    ],
    techStack: [
      { name: "Linux", icon: linuxIcon },
      { name: "C++", icon: cppIcon },
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "Azure", icon: azureIcon },
      { name: "Android", icon: androidIcon },
      { name: "Makefile", icon: makefileIcon },
      { name: "Bash", icon: bashIcon },
    ],
  },
];

// Education data based on Arka Pramanik's resume
const educationData = [
  {
    id: 1,
    institution: "Vellore Institute of Technology",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2020 - 2024",
    logo: vitLogo,
    descriptions: [
      "Completed Bachelor's degree in Computer Science and Engineering with CGPA: 9.03/10.0.",
      "Gained strong foundation in programming, data structures, algorithms, and software engineering principles.",
      "Participated in various coding competitions including Google Hash Code where secured AIR 1403.",
      "Selected for Amazon ML Summer School Program as top 200 from India.",
      "Active member of CodeChef VIT and IEEE-CS VIT, mentoring junior members in DSA and competitive coding.",
    ],
    courses: [
      { name: "Data Structures", icon: cppIcon },
      { name: "Algorithms", icon: pythonIcon },
      { name: "Database Systems", icon: sqlIcon },
      { name: "Web Development", icon: jsIcon },
      { name: "Software Engineering", icon: reactIcon },
      { name: "Computer Networks", icon: networkIcon },
      { name: "Operating Systems", icon: osIcon },
      { name: "Machine Learning", icon: pythonIcon },
    ],
  },
  {
    id: 2,
    institution: "St. Stephen's School",
    degree: "Higher Secondary Education",
    duration: "2018 - 2020",
    logo: stStephensLogo,
    descriptions: [
      "Completed Class XII with 96.5% aggregate in 2020.",
      "Completed Class X with 89.6% aggregate in 2018.",
      "Secured 96.67 percentile (AIR 36503) in JEE Main 2020 among 1.174M participants.",
      "Strong foundation in Mathematics, Physics, and Chemistry.",
      "Developed analytical thinking and problem-solving skills.",
    ],
    courses: [
      { name: "Mathematics", icon: mathIcon },
      { name: "Physics", icon: physicsIcon },
      { name: "Chemistry", icon: chemistryIcon },
      { name: "Computer Science", icon: jsIcon },
      { name: "English", icon: englishIcon },
      { name: "Problem Solving", icon: problemSolvingIcon },
    ],
  },
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
            const isVisible =
              rect.top >= 0 && rect.top <= window.innerHeight / 2;
            if (isVisible && activeExperience !== index) {
              setActiveExperience(index);
            }
          }
        });
      } else {
        educationRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const isVisible =
              rect.top >= 0 && rect.top <= window.innerHeight / 2;
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
      ref={(el) => (experienceRefs.current[index] = el)}
      className={`experience-group ${activeExperience === index ? "active" : "dimmed"}`}
      style={{ marginBottom: "4rem" }}
    >
      <div className="timeline-container">
        {/* Company Logo Circle and Header */}
        <div className="timeline-header">
          <div className="timeline-logo-circle">
            <img src={item.logo} alt={`${item.company} logo`} />
          </div>
          <div className="timeline-header-content">
            <h3 className="company-name">{item.company}</h3>
            <p className="position-duration">
              {item.position} | {item.duration}
            </p>
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
      ref={(el) => (educationRefs.current[index] = el)}
      className={`experience-group ${activeEducation === index ? "active" : "dimmed"}`}
      style={{ marginBottom: "4rem" }}
    >
      <div className="timeline-container">
        {/* Institution Logo Circle and Header */}
        <div className="timeline-header">
          <div className="timeline-logo-circle">
            <img src={item.logo} alt={`${item.institution} logo`} />
          </div>
          <div className="timeline-header-content">
            <h3 className="company-name">{item.institution}</h3>
            <p className="position-duration">
              {item.degree} | {item.duration}
            </p>
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
    const currentData =
      activeTab === "experience" ? experienceData : educationData;
    const activeIndex =
      activeTab === "experience" ? activeExperience : activeEducation;
    const currentItem = currentData[activeIndex];

    if (!currentItem) return null;

    const stackItems =
      activeTab === "experience" ? currentItem.techStack : currentItem.courses;
    const title =
      activeTab === "experience" ? "Tech Stack" : "Courses & Skills";

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
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "1.1rem",
                  marginBottom: "2rem",
                }}
              >
                A glimpse into my academic and professional experience, shaping
                my growth in the tech world.
              </p>
            </Col>
          </Row>

          {/* Download Resume Button */}
          <Row
            style={{
              justifyContent: "center",
              position: "relative",
              marginBottom: "3rem",
            }}
          >
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
            <Col lg={6} className="experience-timeline">
              {activeTab === "experience"
                ? experienceData.map((item, index) =>
                    renderExperienceItem(item, index)
                  )
                : educationData.map((item, index) =>
                    renderEducationItem(item, index)
                  )}
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
