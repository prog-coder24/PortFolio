import React from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const Contact = () => {
  return (
    <div className="contact">
      <h3 className="mb-5">
        <PermContactCalendarIcon style={{ fontSize: 35, marginBottom: 8 }} />{" "}
        Contact
      </h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Subject" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={7} placeholder="Enter your message" />
      </Form.Group>
      <Button variant="primary">Send message</Button>
    </div>
  );
};

export default Contact;
