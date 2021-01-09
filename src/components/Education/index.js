import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import "./style.css";

const Education = () => {
  return (
    <div className="education">
      <h3 className="mb-5">
        <SchoolIcon style={{ fontSize: 35, marginRight: 5, marginBottom: 3 }} />{" "}
        Education
      </h3>
      <p className="m-0">2018-current</p>
      <p style={{ fontWeight: "bold", fontSize: 20 }}>
        Bachelor's degree in Computer Science
      </p>
      <p>CGPA-9.8</p>
    </div>
  );
};

export default Education;
