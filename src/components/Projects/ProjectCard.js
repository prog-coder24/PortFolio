import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

const Projectcard = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=126"
      />
      <Card.Body>
        <Card.Title>
          <a href="https://v24thona.pynywhere.com">
            Academia Factual Information Management System
          </a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Projectcard;
