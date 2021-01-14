import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./style.css";
import { about } from "../../Content";

const About = () => {
  return (
    <div className="wrapper about" data-aos="fade-up" data-aos-duration="1000">
      <h3 className="mb-5">
        <AccountCircleIcon className="icon-each" /> About Me
      </h3>
      <p>{about}</p>
    </div>
  );
};

export default About;
