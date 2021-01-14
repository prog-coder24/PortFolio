import React from "react";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { skills } from "../../Content";
import "./style.css";

const Skills = () => {
  return (
    <div className="wrapper skills" data-aos="fade-up" data-aos-duration="1000">
      <h3 className="mb-5">
        <FormatListBulletedIcon className="icon-each" /> Skills
      </h3>
      {skills.map((s) => {
        return (
          <>
            <p>
              <b>{s.domain}</b> : <i>{s.skills} </i>
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Skills;
