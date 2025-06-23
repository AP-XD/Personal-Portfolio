import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 2,
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.3,
            },
          },
        },
      },
      
      particles: {
        color: {
          value: "#30b3ff",
        },
        
        links: {
          color: "#30b3ff",
          distance: 100,
          enable: true,
          opacity: 0.25,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.5,
          straight: false,
          attract: {
            enable: false,
          },
        },
        
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 50,
        },
        
        opacity: {
          value: 0.3,
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
          },
        },
        
        shape: {
          type: "circle",
        },
        
        size: {
          value: { min: 1, max: 4 },
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 1,
          },
        },
        
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
      },
      
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 30,
              },
              move: {
                speed: 0.3,
              },
              links: {
                distance: 80,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: false,
                },
              },
            },
          },
        },
        {
          maxWidth: 480,
          options: {
            particles: {
              number: {
                value: 20,
              },
              links: {
                enable: false,
              },
            },
          },
        },
      ],
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
    );
  }

  return <></>;
};

export default Particle;
