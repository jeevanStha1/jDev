import React from "react";
import { LiaUserNinjaSolid } from "react-icons/lia";
import { MdPhoneEnabled, MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadphonesAlt, FaGamepad } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";
import { BiMoviePlay } from "react-icons/bi";
import { BsFillCameraFill } from "react-icons/bs";

import "./about.scss";
import Title from "../title/Title";

function About() {
  const interests = [
    {
      icon: <FaHeadphonesAlt />,
      name: "Music",
    },
    {
      icon: <FaGamepad />,
      name: "Game",
    },
    {
      icon: <SiYourtraveldottv />,
      name: "Travel",
    },
    {
      icon: <BiMoviePlay />,
      name: "Movie",
    },
    {
      icon: <BsFillCameraFill />,
      name: "Photos",
    },
  ];
  return (
    <div className="aboutMe" id="About">
      <div className="container w-75 m-auto">
        <div className="aboutMe-1 pb-4">
          <Title name={'My Intro'}/>
        </div>
        <div className="aboutMe-2 row">
          <div className="aboutMe-2-1 col-lg-5 col-sm-12">
            <img src="./img/user/user1.jpg" alt="" />
          </div>
          <div className="aboutMe-2-2 col-lg-7 col-sm-12">
            <h2>About Me</h2>
            <p className="opacity-80">
              Passionate self-taught developer with four months of internship experience, dedicated to crafting
visually appealing and functional user interfaces. Seeking opportunities to apply my front-end
skills in a dynamic organization, with a focus on innovative solutions and continuous learning.
            </p>
            <div className="status">
              <div className="status-1">
                <LiaUserNinjaSolid className="icon" />
                <span className="status-1-1">Name</span>
                <span className="status-1-2">Jeevan Shrestha</span>
              </div>
              <div className="status-1">
                <MdPhoneEnabled className="icon" />
                <span className="status-1-1">Phone</span>
                <span className="status-1-2">+977 981 0322 738</span>
              </div>
              <div className="status-1">
                <MdOutlineMarkEmailRead className="icon" />
                <span className="status-1-1">Email</span>
                <span className="status-1-2">Shresthaj1986@gmail.com</span>
              </div>
              <div className="status-1">
                <IoLocationOutline className="icon" />
                <span className="status-1-1">Address</span>
                <span className="status-1-2">Kathmandu, NP</span>
              </div>
            </div>
            <div className="interest py-4">
              <h5 className="interest-1">My Interests</h5>
              <ul className="interest-2">
                {interests.map((item, idx) => (
                  <li className="d-flex gap-2 align-items-center">
                    <span className="icon text-info">{item.icon}</span>
                    <span className="name ">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
