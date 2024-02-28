import React from "react";
import Title from "../title/Title";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";

import "./education.scss";

function Education() {
  const education = [
    {
      id: 1,
      name: "madan bhandari memorial college",
      faculty: "Bsc CSIT",
      duration: "2018 - current",
    },
    {
      id: 2,
      name: "Reliance international academy",
      faculty: "science",
      duration: "2015 - 2017",
    },
    {
      id: 3,
      name: "Shree jana jagriti secondary school",
      faculty: "SLC",
      duration: "2004 - pppp2014",
    },
  ];
  const experience = [
    {
      id: 1,
      name: "Frontend Developer at SUGA Inc.",
      faculty: "Intern",
      duration: "May 2023 - Sep 2023",
    },
    
  ];
  return (
    <div className="education" id="Education">
      <div className="container w-75">
        <div className="education-1">
          <Title name={"My Qualification"} />
        </div>
        <div className="education-2">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="heading pb-4">
                <FaGraduationCap className="icon" />
                <span>Education</span>
              </div>
              <div className="edu">
                {education.map((item, idx) => (
                  <div className="edu-1 mb-4" key={idx}>
                    <name className=" fw-bold">{item.name}</name>
                    <small>{item.faculty}</small>
                    <span className=" text-info mt-2">
                      <FaCalendarAlt className="icon" />
                      <small>{item.duration}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="heading pb-4 d-flex ">
                <MdWorkHistory className="icon" />
                <span>Experience</span>
              </div>
              <div className="edu ">
                {experience.map((item, idx) => (
                  <div className="edu-1 mb-4 d-flex justify-content-end flex-column" key={idx}>
                    <name className=" fw-bold">{item.name}</name>
                    <small>{item.faculty}</small>
                    <span className=" text-info mt-2">
                      <FaCalendarAlt className="icon" />
                      <small>{item.duration}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
