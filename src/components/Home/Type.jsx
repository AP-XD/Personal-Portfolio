import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Platform Engineer",
          "Systems Architect", 
          "DevOps Engineer",
          "Competitive Programmer",
          "MERN Stack Developer",
          "Android Developer",
          "Open Source Contributor",
          "Cloud Native Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 80,
      }}
    />
  );
}

export default Type;
