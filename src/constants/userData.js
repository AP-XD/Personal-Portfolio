import HPE from "../Assets/Projects/HPE.png";
import arrow from "../Assets/Projects/arrow.jpg";
import enconnect from "../Assets/Projects/enconnect.jpg";
import tuition from "../Assets/Projects/tuition.jpg";
import habify from "../Assets/Projects/habify.jpg";
import nlp from "../Assets/Projects/nlp.png";
import weather from "../Assets/Projects/weather.png";
import Netflix from "../Assets/Projects/Netflix.svg";

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
  }
};
