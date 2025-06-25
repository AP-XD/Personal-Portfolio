// Import company logos
import hpeLogo from "../Assets/logos/companies/HPE-logo-black.png";
import arrowLogo from "../Assets/logos/companies/arrowos-logo.png";
import vitLogo from "../Assets/logos/education/Vellore_Institute_of_Technology_logo.png";
import stStephensLogo from "../Assets/logos/education/ststephens-logo.png";

// Import tech stack icons
// Skill icons imports from organized Assets folder
import jsIcon from "../Assets/Skills/programming-languages/js.svg";
import reactIcon from "../Assets/Skills/frontend/react.png";
import nodeIcon from "../Assets/Skills/backend/nodejs.svg";
import flaskIcon from "../Assets/Skills/backend/flask.svg";
import pythonIcon from "../Assets/Skills/programming-languages/py.svg";
import cppIcon from "../Assets/Skills/programming-languages/cpp.svg";
import gitIcon from "../Assets/Skills/tools/git.svg";
import githubIcon from "../Assets/Skills/tools/github.svg";
import sqlIcon from "../Assets/Skills/backend/sql.png";
import kubernetesIcon from "../Assets/Skills/devops/kubernetes.png";
import prometheusIcon from "../Assets/Skills/devops/prometheus.svg";
import grafanaIcon from "../Assets/Skills/devops/grafana.svg";
import helmIcon from "../Assets/Skills/devops/helm.svg";
import azureIcon from "../Assets/Skills/cloud/azure.svg";
import linuxIcon from "../Assets/Skills/tools/linux.svg";
import kubebenchIcon from "../Assets/Skills/devops/kube-bench.png";
import trivyIcon from "../Assets/Skills/devops/trivy.png";
import androidIcon from "../Assets/icons/tools/Android-Logo.png";
import makefileIcon from "../Assets/icons/tools/makefile.webp";
import bashIcon from "../Assets/icons/tools/bash.png";
import dockerIcon from "../Assets/Skills/devops/docker.svg";
import networkIcon from "../Assets/icons/tools/computer-networking.png";
import osIcon from "../Assets/icons/tools/os.webp";
import mathIcon from "../Assets/icons/subjects/maths.avif";
import physicsIcon from "../Assets/icons/subjects/phys.jpg";
import chemistryIcon from "../Assets/icons/subjects/chem.jpg";
import englishIcon from "../Assets/icons/subjects/eng.jpg";
import problemSolvingIcon from "../Assets/icons/subjects/problem-solving.jpg";
import istioIcon from "../Assets/Skills/devops/istio.svg";
import kialiIcon from "../Assets/Skills/devops/kiali.png";

// Experience data based on Arka Pramanik's resume
export const experienceData = [
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
      { name: "Python", icon: pythonIcon },
      { name: "Flask", icon: flaskIcon },
      { name: "Git", icon: gitIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Linux", icon: linuxIcon },
      { name: "Bash", icon: bashIcon },
      { name: "Makefile", icon: makefileIcon },
      { name: "Docker", icon: dockerIcon }
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
      { name: "Helm", icon: helmIcon },
      { name: "Node.js", icon: nodeIcon },
      { name: "Git", icon: gitIcon },
      { name: "Linux", icon: linuxIcon },
      { name: "Bash", icon: bashIcon },
      { name: "Makefile", icon: makefileIcon },
      { name: "Docker", icon: dockerIcon }
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
export const educationData = [
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
