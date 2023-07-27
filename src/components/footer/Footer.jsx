import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin,AiOutlineHeart, AiOutlineGooglePlus } from "react-icons/ai";
import {RiCopyrightLine} from "react-icons/ri";

import "./footer.scss";

function Footer() {
  return (
    <div className="footer mt-5 bg-light">
      <div className="container w-75 py-4 ">
        <div className="d-flex align-items-center justify-content-between">
        <div className="footer__icon">
          <img src="./img/logo/logo3.png" alt="jdev" />
        </div>
        <div className="footer__items ">
          <AiOutlineLinkedin className="icon text-primary" />
          <AiOutlineGooglePlus className="icon text-danger" />
          <FiTwitter className="icon text-primary" />
          <FiInstagram className="icon text-danger" />
          <FiFacebook className="icon text-primary" />
        </div>
        </div>
        <div className="footer__copyright">
          <p className="d-flex flex-wrap align-items-center justify-content-center gap-1">
            Copyright <RiCopyrightLine /> 2023 All right reserved | Made with <AiOutlineHeart className=" icon text-danger fs-4"/> by <span className=" fw-bold fs-5">jDev</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
