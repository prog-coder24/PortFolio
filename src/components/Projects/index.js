import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import "./style.css";
import Projectcard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="projects-container">
      <h3 className="mb-5">
        <CodeIcon style={{ fontSize: 35, marginBottom: 5 }} /> Projects
      </h3>
      <div className="card-grid">
        <Projectcard />
      </div>
    </div>
  );
};

export default Projects;
