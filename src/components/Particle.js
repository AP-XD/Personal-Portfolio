import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Use slim version for better performance

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load only the slim version to reduce bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Remove console.log for production performance
  }, []);

  // Memoize particle options to prevent unnecessary re-renders
  const particleOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60, // Reduced from 120 for better performance
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "connect",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2, // Reduced quantity
        },
        connect: {
          distance: 80, // Reduced connection distance
          links: {
            opacity: 0.3,
          },
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 120, // Reduced from 150
        enable: false,
        opacity: 0.3, // Reduced opacity
        width: 1,
      },
      collisions: {
        enable: false, // Disabled for better performance
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.3, // Reduced speed
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000, // Increased area to reduce particle density
        },
        value: 60, // Reduced from 100 particles
      },
      opacity: {
        value: 0.25, // Reduced opacity
        animation: {
          enable: false, // Disabled animation for performance
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 2 }, // Reduced max size
        animation: {
          enable: false, // Disabled animation for performance
        },
      },
    },
    detectRetina: true,
    smooth: true, // Enable smooth rendering
    reduceDuplicates: true, // Reduce duplicate particles
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none", // Improve performance
      }}
    />
  );
};

export default Particle;
