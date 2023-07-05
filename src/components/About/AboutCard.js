import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCode } from "react-icons/ai";
import { FaLaptop } from "react-icons/fa";
import { FaICursor } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="blue">Arka Pramanik </span>
            from <span className="blue"> Kolkata, West Bengal.</span>
            <br />I am a Final Year Student at{" "}
            <span className="blue">
              Vellore Institute of Technology, Vellore
            </span>
            <br /> pursuing B.Tech in{" "}
            <span className="blue">Computer Science & Engineering.</span>
            <br />
            <br />
            Apart from coding <AiFillCode /> , some other activities that I love
            to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaICursor /> <span className="blue">Exploring New Technology</span>
            </li>
            <li className="about-activity">
              <SiEpicgames /> <span className="blue">Writing Tech Blogs</span>
            </li>
            <li className="about-activity">
              <FaLaptop /> <span className="blue">Watching Anime</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
