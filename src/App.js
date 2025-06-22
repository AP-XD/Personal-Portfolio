import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer";
import "./style.css";
import "./App.css";
import "./background-fix.css";
import "./cursor-fix.css";
// import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
// Import the LCP image to get webpack path immediately
import homeLogo from "./Assets/Programming.svg";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    // IMMEDIATELY preload the LCP image with highest priority
    const preloadLCPImage = () => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = homeLogo; // This is the actual webpack path
      link.fetchPriority = "high";
      link.type = "image/svg+xml";
      document.head.appendChild(link);
    };

    preloadLCPImage();

    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatedCursor
        zIndex={999999999}
        innerSize={15}
        outerSize={30}
        color="33, 248, 255"
        outerAlpha={0.5}
        innerScale={1.75}
        outerScale={1.5}
      />
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="connect">
          <Connect />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
