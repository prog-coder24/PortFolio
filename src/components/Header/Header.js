import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <h1>I am Vaishnavi Sawant</h1>
      <a href="https://www.linkedin.com/in/vaishnavi-sawant-276085203/">
        <LinkedInIcon className="icon" />
      </a>
      <a href="https://github.com/prog-coder24?tab=repositories">
        <GitHubIcon className="icon" />
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vaishnavisawant1224@gmail.com">
        <EmailIcon className="icon" />
      </a>
      <a href="https://twitter.com/vaishnaviiswnt">
        <TwitterIcon className="icon" />
      </a>
    </div>
  );
};

export default Header;
