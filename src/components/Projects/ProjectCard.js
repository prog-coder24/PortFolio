import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";

const Projectcard = ({ image, link, title }) => {
  return (
    <Card>
      <Card.Img className="image" variant="top" src={image} />
      <Card.Body className="card-body">
        <Card.Title>
          <a href={link}>{title}</a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Projectcard;
