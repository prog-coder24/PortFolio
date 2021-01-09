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
      <LinkedInIcon className="icon" />
      <GitHubIcon className="icon" />
      <EmailIcon className="icon" />
      <TwitterIcon className="icon" />
    </div>
  );
};

export default Header;
