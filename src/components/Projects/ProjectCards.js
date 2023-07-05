import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import CardGroup from 'react-bootstrap/CardGroup';
function ProjectCards(props) {
  return (
    <CardGroup>
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ padding:'2rem' }} />
      <Card.Body>
        <Card.Title style={{ fontSize:"1.25rem", fontWeight:"700"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center"}}>
          {props.description}
        </Card.Text>
        <Card.Footer>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"View Project"}
        </Button></Card.Footer>
      </Card.Body>
    </Card>
    </CardGroup>

  );
}
export default ProjectCards;
