import React, { useState } from "react";
import Title from "../title/Title";
import Progress from "../progress/Progress";
import "./Skils.scss";
import CircularProgressBar from "../circularProgressBar/CirculerProgressBar";

function Skils() {
  const skills = [
    {
      id: 1,
      name: "html",
      completed: 90,
    },
    {
      id: 2,
      name: "css",
      completed: 70,
    },
    {
      id: 3,
      name: "js",
      completed: 70,
    },
    {
      id: 4,
      name: "react",
      completed: 50,
    },
    {
      id: 5,
      name: "php",
      completed: 70,
    },
    {
      id: 6,
      name: "git",
      completed: 60,
    },
    {
      id: 7,
      name: "bootstrap",
      completed: 50,
    },
    {
      id: 8,
      name: "react",
      completed: 50,
    },
    {
      id: 8,
      name: "useContext-api",
      completed: 50,
    },
    {
      id: 8,
      name: "redux-toolkit",
      completed: 50,
    },
  ];
  return (
    <div className="skils">
      <div className="container w-75">
        <div className="skils-1">
          <Title name={"Why Choose Me"} />
        </div>
        {/* <div className="skils-2 text-center">
          <h2 className=" fw-bold">My Expertise Area</h2>
        </div> */}
        <div className="skils-3">
          <div className="row d-flex justify-content-center">
            {skills.map((item, idx) => (
              <div className="skills-item my-3 d-flex justify-content-center">
                <CircularProgressBar width={item.completed} title={item.name} />
              {/* // <Progress name={item.name} completed={item.completed} /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skils;
