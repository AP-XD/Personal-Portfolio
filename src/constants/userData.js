import HPE from "../Assets/Projects/HPE.png";
import arrow from "../Assets/Projects/arrow.jpg";
import enconnect from "../Assets/Projects/enconnect.jpg";
import tuition from "../Assets/Projects/tuition.jpg";
import habify from "../Assets/Projects/habify.jpg";
import nlp from "../Assets/Projects/nlp.png";
import weather from "../Assets/Projects/weather.png";
import Netflix from "../Assets/Projects/Netflix.svg";

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

export const userData = {
  projectsData: {
    title: "My Recent Works",
    desc: "Here are a few projects I've worked on recently.",
    projects: [
      {
        id: 1,
        name: "HPC Security Dashboard",
        description: "Enhance Kubernetes security monitoring with integrated Kube Bench and Trivy, enabling visualization of metrics in Prometheus and Grafana for actionable insights and improved security posture.",
        techStack: [
          "Kubernetes",
          "Prometheus",
          "Grafana", 
          "Docker",
          "Security Tools"
        ],
        image: HPE,
        github: "https://github.com/AP-XD/HPE-CTY-HPC-Security-Dashboard",
        website: "https://github.com/AP-XD/HPE-CTY-HPC-Security-Dashboard"
      },
      {
        id: 2,
        name: "Online Tuition Management System",
        description: "A web app that helps the student and teachers to find, manage and organize local tuition centers.",
        techStack: [
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "Bootstrap"
        ],
        image: tuition,
        github: "https://github.com/AP-XD/SWE-J-Component",
        website: "https://github.com/AP-XD/SWE-J-Component"
      },
      {
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
    desc: "I'm proficient in a comprehensive range of modern technologies spanning full-stack development, DevOps, cloud infrastructure, and containerization that empower me to build and deploy highly scalable solutions.",
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

      // Frontend Technologies
      {
        id: 6,
        name: "HTML5",
        type: "Markup Language",
        image: html,
      },
      {
        id: 7,
        name: "CSS3",
        type: "Styling Language",
        image: css,
      },
      {
        id: 8,
        name: "React",
        type: "JavaScript Library",
        image: react,
      },
      {
        id: 9,
        name: "Next.js",
        type: "React Framework",
        image: next,
      },
      {
        id: 10,
        name: "Bootstrap",
        type: "CSS Framework",
        image: bs,
      },
      {
        id: 11,
        name: "Tailwind CSS",
        type: "CSS Framework",
        image: tailwind,
      },

      // Backend Technologies
      {
        id: 12,
        name: "Node.js",
        type: "JavaScript Runtime",
        image: nodejs,
      },
      {
        id: 13,
        name: "Express.js",
        type: "Web Framework",
        image: express,
      },
      {
        id: 14,
        name: "Firebase",
        type: "Backend Platform",
        image: firebase,
      },

      // Tools & Version Control
      {
        id: 15,
        name: "Git",
        type: "Version Control",
        image: git,
      },
      {
        id: 16,
        name: "GitHub",
        type: "Code Repository",
        image: github,
      },
      {
        id: 17,
        name: "VS Code",
        type: "Code Editor",
        image: vscode,
      },
      {
        id: 18,
        name: "Linux",
        type: "Operating System",
        image: linux,
      },

      // Infrastructure as Code
      {
        id: 19,
        name: "Terraform",
        type: "Infrastructure as Code",
        image: terraform,
      },

      // Containerization & Orchestration
      {
        id: 20,
        name: "Docker",
        type: "Containerization",
        image: docker,
      },
      {
        id: 21,
        name: "Kubernetes",
        type: "Container Orchestration",
        image: kubernetes,
      },

      // CI/CD Pipelines
      {
        id: 22,
        name: "Jenkins",
        type: "CI/CD Pipeline",
        image: jenkins,
      },
      {
        id: 23,
        name: "GitLab CI/CD",
        type: "CI/CD Pipeline",
        image: gitlab,
      },
      {
        id: 24,
        name: "GitHub Actions",
        type: "CI/CD Pipeline",
        image: githubactions,
      },

      // Observability
      {
        id: 25,
        name: "Prometheus",
        type: "Monitoring",
        image: prometheus,
      },
      {
        id: 26,
        name: "Grafana",
        type: "Visualization",
        image: grafana,
      },

      // Cloud Platforms
      {
        id: 27,
        name: "AWS",
        type: "Cloud Platform",
        image: amazonwebservices,
      },
      {
        id: 28,
        name: "Azure",
        type: "Cloud Platform",
        image: azure,
      },
      {
        id: 29,
        name: "Google Cloud",
        type: "Cloud Platform",
        image: googlecloud,
      },

      // Service Meshes
      {
        id: 30,
        name: "Istio",
        type: "Service Mesh",
        image: istio,
      },

      // Package Managers & Deployment
      {
        id: 31,
        name: "Helm",
        type: "Package Manager",
        image: helm,
      },
    ],
  },
  projectsData: {
    title: "My Recent Works",
    desc: "Here are a few projects I've worked on recently.",
    projects: [
      {
        id: 1,
        name: "HPC Security Dashboard",
        description: "Enhance Kubernetes security monitoring with integrated Kube Bench and Trivy, enabling visualization of metrics in Prometheus and Grafana for actionable insights and improved security posture.",
        techStack: [
          "Kubernetes",
          "Prometheus",
          "Grafana", 
          "Docker",
          "Security Tools"
        ],
        image: HPE,
        github: "https://github.com/AP-XD/HPE-CTY-HPC-Security-Dashboard",
        website: "https://github.com/AP-XD/HPE-CTY-HPC-Security-Dashboard"
      },
      {
        id: 2,
        name: "Online Tuition Management System",
        description: "A web app that helps the student and teachers to find, manage and organize local tuition centers.",
        techStack: [
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "Bootstrap"
        ],
        image: tuition,
        github: "https://github.com/AP-XD/SWE-J-Component",
        website: "https://github.com/AP-XD/SWE-J-Component"
      },
      {
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
  }
};
