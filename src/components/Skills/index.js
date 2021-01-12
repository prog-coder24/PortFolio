import React from "react";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import "./style.css";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="mb-5">
        <FormatListBulletedIcon className="icon-each" /> Skills
      </h3>
      <p>
        <b>Front end development</b> : <i>html5, CSS3, JavaScript </i>
      </p>
      <p>
        <b>Back end development</b> : <i>Python, Java</i>{" "}
      </p>
      <p>
        <b>Frameworks</b> : <i>ReactJS, Django, Bootstrap4</i>
      </p>
      <p>
        <b>Database</b> : <i>SQL, SQLite</i>
      </p>
      <p>
        <b>Cloud</b> : <i>AWS, Firebase Hosting</i>
      </p>
    </div>
  );
};

export default Skills;
