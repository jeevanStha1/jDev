import React, { useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import "./navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [click, setClick] = useState(null);

  const activeLink = (e) => {
    const id = e.target;
    if (click) {
      click.classList.remove("nav-link");
    }
    id.classList.add("nav-link");
    setClick(id);
  };

  const navlink = [
    "Home",
    "About",
    "Education",
    "Projects",
    "Blog",
    "Services",
  ];
  const isActive = () => {
    window.scrollY > 20 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    // window.addEventListener("scroll", isActive);
    return () => {
      window.addEventListener("scroll", isActive);
    };
  },[]);
  return (
    <div className={active ? "Navbar active border-bottom" : "Navbar noActive"}>
      <div className="container w-75 m-auto row  justify-content-between align-items-center py-2">
        <div className="Navbar-left col-lg-3 col-md-2 col-sm-4  d-flex align-items-center">
          <img
            src={active ? "./img/logo/logo3.png" : "./img/logo/logo1.png"}
            alt="jdev"
            className="logo"
          />
        </div>
        <ul className={`Navbar-right col-lg-9 col-md-10 col-sm-11 pt-3`}>
          {navlink.map((link, idx) => (
            <li
              className={`navLink ${active && "text-dark"} `}
              onClick={activeLink}
            >
              <a
                href={`#${link}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-icon ">
          {showMenu ? (
            <AiOutlineMenuFold
              onClick={() => setShowMenu(!showMenu)}
              className={`fs-1 icon ${!active && "text-white"}`}
            />
          ) : (
            <AiOutlineMenuUnfold
              onClick={() => setShowMenu(!showMenu)}
              className={`fs-1 icon ${!active && "text-white"}`}
            />
          )}
          {showMenu && (
            <ul
              className={`mobile-menu p-3 ${
                active && "border-start border-bottom"
              }`}
              style={{
                backgroundImage:
                  !active && "linear-gradient(to right, #013068,#043375)",
                backgroundColor: active && "white",
              }}
            >
              {navlink.map((item, idx) => (
                <li
                  className={`mobile-menu-link fw-bold ${
                    !active && "text-white"
                  }`} onClick={activeLink}
                >
                  <a
                    href={`#${item}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
