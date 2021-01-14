import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import { projects } from "../../Content";
import "./style.css";
import Projectcard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="wrapper projects-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h3 className="mb-5">
        <CodeIcon className="icon-each" /> Projects
      </h3>
      <div className="card-grid">
        {projects.map((p) => {
          return <Projectcard image={p.image} link={p.link} title={p.title} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
