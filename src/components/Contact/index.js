import React from "react";
import "./style.css";
import { Form, Button } from "react-bootstrap";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const Contact = () => {
  return (
    <div className="contact">
      <h3 className="mb-5">
        <PermContactCalendarIcon className="icon-each" /> Contact
      </h3>
      <div className="contact-content">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="contact-holder"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Subject"
            className="contact-holder"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={7}
            placeholder="Enter your message"
            className="contact-holder"
          />
        </Form.Group>
        <Button variant="primary" className="contact-button">
          Send message
        </Button>
      </div>
    </div>
  );
};

export default Contact;
