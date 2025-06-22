import React, { useState, useEffect, Suspense, lazy } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import "./style.css";
import "./App.css";
import "./background-fix.css";
import "./cursor-fix.css";
import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import { usePerformanceOptimization } from "./hooks/usePerformanceOptimization";

// Lazy load components for better performance
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Connect = lazy(() => import("./components/Connect/Connect"));
const Footer = lazy(() => import("./components/Footer"));
const AnimatedCursor = lazy(() => import("react-animated-cursor"));

function App() {
  const [load, updateLoad] = useState(true);
  const [showCursor, setShowCursor] = useState(false);
  const { isReducedMotion, isSlowDevice } = usePerformanceOptimization();

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
      // Delay cursor animation to reduce initial load, skip on slow devices
      if (!isSlowDevice) {
        setTimeout(() => setShowCursor(true), 500);
      }
    }, isSlowDevice ? 800 : 1200); // Faster loading on slow devices

    return () => clearTimeout(timer);
  }, [isSlowDevice]);

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="section-loading">
      <div className="loading-spinner"></div>
    </div>
  );

  return (
    <>
      {showCursor && !isReducedMotion && !isSlowDevice && (
        <Suspense fallback={null}>
          <AnimatedCursor
            zIndex={999999999}
            innerSize={15}
            outerSize={30}
            color="33, 248, 255"
            outerAlpha={0.5}
            innerScale={1.75}
            outerScale={1.5}
            showSystemCursor={false}
            clickables={[
              'a',
              'button',
              '.card',
              '.btn',
              'input',
              'textarea',
            ]}
          />
        </Suspense>
      )}
      <Preloader load={load} />
      <div 
        className={`App ${isReducedMotion ? 'reduced-motion' : ''} ${isSlowDevice ? 'slow-device' : ''}`} 
        id={load ? "no-scroll" : "scroll"}
      >
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <div id="home">
            <Home />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="about">
            <About />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="projects">
            <Projects />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="resume">
            <Resume />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="connect">
            <Connect />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
