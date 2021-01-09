import React from "react";
import "./style.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import LanguageIcon from "@material-ui/icons/Language";

const SocialNetwork = () => {
  return (
    <div className="social">
      <h3 className="mb-5">
        <LanguageIcon style={{ fontSize: 35, marginBottom: 4 }} /> Social
        Network
      </h3>
      <span>
        <a href="https://www.linkedin.com/in/vaishnavi-sawant-276085203/">
          <LinkedInIcon className="s-icon" />
        </a>
        Vaishnavi Sawant
      </span>
      <span>
        <a href="https://github.com/prog-coder24?tab=repositories">
          <GitHubIcon className="s-icon" />
        </a>
        prog-coder24
      </span>
      <span>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vaishnavisawant1224@gmail.com">
          <EmailIcon className="s-icon" />
        </a>
        vaishnavisawant1224@gmail.com
      </span>
      <span>
        <a href="#">
          <TwitterIcon className="s-icon" />
        </a>
        @sawantv
      </span>
    </div>
  );
};

export default SocialNetwork;
