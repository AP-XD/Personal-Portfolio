import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          padding: "1.5rem",
          height: "200px",
          objectFit: "contain",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "0.95rem" }}>
            {props.description}
          </Card.Text>
        </div>
        <div className="mt-auto">
          <Button
            variant="primary"
            href={props.link}
            target="_blank"
            className="w-100"
          >
            <BiLinkExternal /> &nbsp;
            {"View Project"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
