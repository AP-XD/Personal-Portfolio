import HPE from "../Assets/Projects/HPE.png";
import arrow from "../Assets/Projects/arrow.jpg";
import enconnect from "../Assets/Projects/enconnect.jpg";
import tuition from "../Assets/Projects/tuition.jpg";
import habify from "../Assets/Projects/habify.jpg";
import nlp from "../Assets/Projects/nlp.png";
import weather from "../Assets/Projects/weather.png";
import Netflix from "../Assets/Projects/Netflix.jpg";
import portfolio from "../Assets/Projects/portfolio.svg";
// Import skill icons
// Programming Languages
import cpp from "../Assets/Skills/programming-languages/cpp.svg";
import js from "../Assets/Skills/programming-languages/js.svg";
import java from "../Assets/Skills/programming-languages/java.svg";
import py from "../Assets/Skills/programming-languages/py.svg";
import ts from "../Assets/Skills/programming-languages/ts.svg";

// Frontend Technologies
import html from "../Assets/Skills/frontend/html.svg";
import css from "../Assets/Skills/frontend/css.svg";
import react from "../Assets/Skills/frontend/react.png";
import bs from "../Assets/Skills/frontend/bs.svg";
import next from "../Assets/Skills/frontend/next.svg";
import tailwind from "../Assets/Skills/frontend/tailwind.svg";

// Backend Technologies
import nodejs from "../Assets/Skills/backend/nodejs.svg";
import express from "../Assets/Skills/backend/express.svg";
import firebase from "../Assets/Skills/backend/firebase.svg";

// Development Tools
import git from "../Assets/Skills/tools/git.svg";
import github from "../Assets/Skills/tools/github.svg";
import vscode from "../Assets/Skills/tools/vscode.svg";
import linux from "../Assets/Skills/tools/linux.svg";

// DevOps/Infrastructure
import terraform from "../Assets/Skills/devops/terraform.svg";
import docker from "../Assets/Skills/devops/docker.svg";
import kubernetes from "../Assets/Skills/devops/kubernetes.png";
import jenkins from "../Assets/Skills/devops/jenkins.svg";
import gitlab from "../Assets/Skills/devops/gitlab.svg";
import githubactions from "../Assets/Skills/devops/githubactions.svg";
import prometheus from "../Assets/Skills/devops/prometheus.svg";
import grafana from "../Assets/Skills/devops/grafana.svg";
import istio from "../Assets/Skills/devops/istio.svg";
import kiali from "../Assets/Skills/devops/kiali.png";
import helm from "../Assets/Skills/devops/helm.svg";

// Cloud Platforms
import amazonwebservices from "../Assets/Skills/cloud/amazonwebservices.svg";
import azure from "../Assets/Skills/cloud/azure.svg";
import googlecloud from "../Assets/Skills/cloud/googlecloud.svg";

// Coding Profiles
import leetcode from "../Assets/Skills/coding-profiles/LeetCode_logo_black.png";
import codeforces from "../Assets/Skills/coding-profiles/Codeforces.colored.svg";
import codechef from "../Assets/Skills/coding-profiles/codechef.png";
import hackerrank from "../Assets/Skills/coding-profiles/hackerrank.svg";

// Additional Skills
import sqlIcon from "../Assets/Skills/backend/sql.png";
import kubeBenchIcon from "../Assets/Skills/devops/kube-bench.png";
import trivyIcon from "../Assets/Skills/devops/trivy.png";

export const userData = {
  projectsData: {
    title: "My Recent Works",
    desc: "Here are a few projects I've worked on recently.",
    projects: [
      {
        id: 1,
        name: "HPC Security Dashboard",
        description: "Developed a centralized security dashboard for the precise representation of Kubernetes security metrics. Implemented a Helm chart and automated installation script for exporter service, improving deployment efficiency and metric export. Provides detailed remediation steps for various tests, enabling efficient resolution of security vulnerabilities.",
        techStack: [
          "Kubernetes",
          "Kube Bench",
          "Trivy-Operator", 
          "Prometheus",
          "Helm",
          "Grafana",
          "Node.js"
        ],
        image: HPE,
        github: "https://github.com/AP-XD/HPE-CTY-HPC-Security-Dashboard",
        website: "https://github.com/AP-XD/HPE-CTY-HPC-Security-Dashboard"
      },
      {
        id: 2,
        name: "Personal Portfolio",
        description: "A dynamic personal portfolio website showcasing professional achievements, skills, and projects using modern web technologies. Implemented responsive design, interactive components, and optimized performance to provide a seamless and engaging browsing experience for visitors.",
        techStack: [
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Git"
        ],
        image: portfolio,
        github: "https://github.com/AP-XD/Personal-Portfolio",
        website: "https://apxd.in/"
      },
      {
        id: 3,
        name: "Online Tuition Management System",
        description: "A web app that helps the student and teachers to find, manage and organize local tuition centers. This allows tuition teachers to upload marks, attendance and course materials and allows students to access them in their tuition center portals. It also allows parents to keep track of their children's performance.",
        techStack: [
          "Django",
          "SQLite3",
          "Bootstrap",
          "Selenium", 
          "Python",
          "HTML",
          "CSS"
        ],
        image: tuition,
        github: "https://github.com/AP-XD/Online-Tuition-Management-System",
        website: "https://github.com/AP-XD/Online-Tuition-Management-System"
      },
      {
        id: 4,
        name: "Device Tree",
        description: "ASUS Max M2 (X01AD) Device Tree Source Code for building Arrow OS Custom ROM for various Android Versions.",
        techStack: [
          "Android",
          "Custom ROM",
          "C++",
          "Linux Kernel"
        ],
        image: arrow,
        github: "https://github.com/AP-XD/device_asus_X01AD",
        website: "https://github.com/AP-XD/device_asus_X01AD"
      },
      {
        id: 5,
        name: "Habify",
        description: "Our Habit Tracker App that helps you to be more disciplined and form good habits to be more productive.",
        techStack: [
          "React Native",
          "Firebase",
          "JavaScript",
          "Mobile Development"
        ],
        image: habify,
        github: "https://github.com/AP-XD/Habify",
        website: "https://github.com/AP-XD/Habify"
      },
      {
        id: 6,
        name: "Enconnect",
        description: "Our project aims in helping make chats the private way by encrypting and decrypting with standard algorithms and using multiple algorithms in same process which provides security and attack free.",
        techStack: [
          "React",
          "Encryption",
          "Security",
          "Node.js",
          "Socket.io"
        ],
        image: enconnect,
        github: "https://github.com/AP-XD/EnConnect",
        website: "https://github.com/AP-XD/EnConnect"
      },
      {
        id: 7,
        name: "Youtube Analyser",
        description: "Our app provides you with a crisp description for your youtube video by using various algorithms.",
        techStack: [
          "Python",
          "NLP",
          "Machine Learning",
          "YouTube API",
          "Flask"
        ],
        image: nlp,
        github: "https://github.com/AP-XD/CSE4022-Project",
        website: "https://github.com/AP-XD/CSE4022-Project"
      },
      {
        id: 8,
        name: "Weather App",
        description: "Beginner Project: Displays weather of a city using OPEN WEATHER API.",
        techStack: [
          "JavaScript",
          "HTML",
          "CSS",
          "Weather API",
          "Responsive Design"
        ],
        image: weather,
        github: "https://github.com/AP-XD/WeatherApp",
        website: "https://github.com/AP-XD/WeatherApp"
      },
      {
        id: 9,
        name: "Netflix Clone",
        description: "Beginner Project: Netflix Clone built using React.js, and Firebase. Fetches latest trending movies from TMDB API.",
        techStack: [
          "React",
          "Firebase",
          "TMDB API",
          "CSS",
          "Authentication"
        ],
        image: Netflix,
        github: "https://github.com/AP-XD/Netflix-clone",
        website: "https://github.com/AP-XD/Netflix-clone"
      }
    ]
  },
  skillsData: {
    title: "My Tech Stack",
    desc: "I'm proficient in competitive coding, CS fundamentals, DevOps, and web development with expertise in modern technologies spanning full-stack development, cloud infrastructure, containerization, and security monitoring solutions.",
    technologies: [
      // Programming Languages
      {
        id: 1,
        name: "C++",
        type: "Programming Language",
        image: cpp,
      },
      {
        id: 2,
        name: "Python",
        type: "Programming Language", 
        image: py,
      },
      {
        id: 3,
        name: "Java",
        type: "Programming Language",
        image: java,
      },
      {
        id: 4,
        name: "JavaScript",
        type: "Programming Language",
        image: js,
      },
      {
        id: 5,
        name: "TypeScript",
        type: "Programming Language",
        image: ts,
      },
      {
        id: 6,
        name: "SQL",
        type: "Database Language",
        image: sqlIcon,
      },

      // Frontend Technologies
      {
        id: 7,
        name: "HTML5",
        type: "Markup Language",
        image: html,
      },
      {
        id: 8,
        name: "CSS3",
        type: "Styling Language",
        image: css,
      },
      {
        id: 9,
        name: "React",
        type: "JavaScript Library",
        image: react,
      },
      {
        id: 10,
        name: "Next.js",
        type: "React Framework",
        image: next,
      },
      {
        id: 11,
        name: "Bootstrap",
        type: "CSS Framework",
        image: bs,
      },
      {
        id: 12,
        name: "Tailwind CSS",
        type: "CSS Framework",
        image: tailwind,
      },

      // Backend Technologies
      {
        id: 13,
        name: "Node.js",
        type: "JavaScript Runtime",
        image: nodejs,
      },
      {
        id: 14,
        name: "Express.js",
        type: "Web Framework",
        image: express,
      },
      {
        id: 15,
        name: "Firebase",
        type: "Backend Platform",
        image: firebase,
      },

      // Tools & Version Control
      {
        id: 16,
        name: "Git",
        type: "Version Control",
        image: git,
      },
      {
        id: 17,
        name: "GitHub",
        type: "Code Repository",
        image: github,
      },
      {
        id: 18,
        name: "VS Code",
        type: "Code Editor",
        image: vscode,
      },
      {
        id: 19,
        name: "Linux",
        type: "Operating System",
        image: linux,
      },

      // Infrastructure as Code
      {
        id: 20,
        name: "Terraform",
        type: "Infrastructure as Code",
        image: terraform,
      },

      // Containerization & Orchestration
      {
        id: 21,
        name: "Docker",
        type: "Containerization",
        image: docker,
      },
      {
        id: 22,
        name: "Kubernetes",
        type: "Container Orchestration",
        image: kubernetes,
      },

      // CI/CD Pipelines
      {
        id: 23,
        name: "Jenkins",
        type: "CI/CD Pipeline",
        image: jenkins,
      },
      {
        id: 24,
        name: "GitLab CI/CD",
        type: "CI/CD Pipeline",
        image: gitlab,
      },
      {
        id: 25,
        name: "GitHub Actions",
        type: "CI/CD Pipeline",
        image: githubactions,
      },

      // Observability
      {
        id: 26,
        name: "Prometheus",
        type: "Monitoring",
        image: prometheus,
      },
      {
        id: 27,
        name: "Grafana",
        type: "Visualization",
        image: grafana,
      },

      // Cloud Platforms
      {
        id: 28,
        name: "AWS",
        type: "Cloud Platform",
        image: amazonwebservices,
      },
      {
        id: 29,
        name: "Azure",
        type: "Cloud Platform",
        image: azure,
      },
      {
        id: 30,
        name: "Google Cloud",
        type: "Cloud Platform",
        image: googlecloud,
      },

      // Service Meshes
      {
        id: 31,
        name: "Istio",
        type: "Service Mesh",
        image: istio,
      },
      {
        id: 32,
        name: "Kiali",
        type: "Observability",
        image: kiali,
      },

      // Package Managers & Deployment
      {
        id: 33,
        name: "Helm",
        type: "Package Manager",
        image: helm,
      },
      {
        id: 34,
        name: "Kube Bench",
        type: "Security Tool",
        image: kubeBenchIcon,
      },
      {
        id: 35,
        name: "Trivy",
        type: "Security Scanner",
        image: trivyIcon,
      },
    ],
  }
};
