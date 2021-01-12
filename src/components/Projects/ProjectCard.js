import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

const Projectcard = () => {
  return (
    <Card>
      <Card.Img
        className="image"
        variant="top"
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=126"
      />
      <Card.Body className="card-body">
        <Card.Title className="c-title">
          <a href="https://v24.pythonanywhere.com/">
            Academia Factual Information Management System
          </a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Projectcard;
