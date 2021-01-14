import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import { socialLinks } from "../../Content";
import "./style.css";

const SocialNetwork = () => {
  return (
    <div className="wrapper social" data-aos="fade-up" data-aos-duration="1000">
      <h3 className="mb-5">
        <LanguageIcon className="icon-social" /> Social Network
      </h3>
      <div className="d-flex flex-wrap social-links ">
        {socialLinks.map((sl) => {
          return (
            <>
              <span>
                <a href="{sl.link}">
                  <sl.icon className="s-icon" />
                </a>
                {sl.username}
              </span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SocialNetwork;
