import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <h3 className="mb-5">
        <AccountCircleIcon style={{ fontSize: 35, marginBottom: 3 }} /> About Me
      </h3>
      <p>
        A passionate individual keen towards learning new and modern
        technologies with the ability to develop and deploy applications.
      </p>
    </div>
  );
};

export default About;
