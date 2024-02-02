import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { Styles } from "../Styles.js";

import { menu, close } from "../assets";
import logo from "../assets/Amir Saeed Logo.png";

const Navbar = () => {
  // State to track active link in the navigation
  const [active, setActive] = useState("");

  // State to track the toggle state for mobile menu
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${Styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        {/* Logo and Home link */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="object-contain w-20 h-20" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Amir Saeed
          </p>
        </Link>

        {/* Desktop navigation */}
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-bold cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>

        {/* Mobile navigation */}
        <div className="flex items-center justify-end flex-1 sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="flex flex-col items-start justify-end gap-4 list-none ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(false);
                    window.location.hash = `#${link.id}`;
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}> {link.title} </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
