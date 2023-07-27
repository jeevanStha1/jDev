import React from "react";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import "./Home.scss";
import About from "../../components/about/About";
import Skils from "../../components/skills/Skils";
import Education from "../../components/education/Education";
import HireMe from "../../components/HireMe/HireMe";
import Projects from "../../components/projects/Projects";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Services from "../../components/services/Services";

function Home() {
  return (
    <div className="Home" id="Home">
      <div className="section-1">
        <div className="container w-75 m-auto">
          <div className="section-1-top d-flex flex-column align-items-center ">
            <div className="section-1-top-1">
              <strong className="">Hello & Welcome</strong>
            </div>
            <div className="section-1-top-2 ">
              <span className="animation">
                <span>
                  I am <strong className="animation-1">Jeevan Shrestha</strong>
                  <strong className="animation-2">A Developer</strong>
                </span>
              </span>
            </div>
            <div className="section-1-top-3 d-flex gap-3">
              <TbBrandFacebookFilled className="icon" />
              <AiOutlineGooglePlus className="icon" />
              <BiLogoLinkedin className="icon" />
              <BsTwitter className="icon" />
              <AiFillInstagram className="icon" />
            </div>
            <div className="section-1-top-4 ">
              <button className=" d-inline px-4 py-2 rounded-5 text-white border-2">
                Download CV
              </button>
            </div>
          </div>
          <div className="section-1-bottom rounded-5">
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
      <div className="section-2">
        <About />
      </div>

      <div className="section-3">
        <Skils />
      </div>
      <div className="section-4">
        <Education />
      </div>
      <div className="section-5">
        <HireMe />
      </div>
      <div className="section-6">
        <Projects />
      </div>
      <div className="section-6">
        <Services />
      </div>
      <div className="section-7">
        <NewsLetter />
      </div>
    </div>
  );
}

export default Home;
