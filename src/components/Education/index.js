import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import { education } from "../../Content";
import "./style.css";

const Education = () => {
  return (
    <div
      className="wrapper education"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h3 className="mb-5">
        <SchoolIcon className="icon-each" /> Education
      </h3>
      {education.map((e) => {
        return (
          <>
            <p className="m-0">{e.year}</p>
            <p style={{ fontWeight: "bold", fontSize: 20 }}>{e.cource}</p>
            <p>{e.grade}</p>
          </>
        );
      })}
    </div>
  );
};

export default Education;
