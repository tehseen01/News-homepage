import React, { useState } from "react";
import "../SASS/navigation.scss";
import { logo } from "./import";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleHandel = () => {
    setToggle(!toggle);
    setMenu(!menu);
  };
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div
        className={`${toggle ? "show" : ""} toggleBtn`}
        onClick={toggleHandel}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`${menu ? "showMenu" : ""}`}>
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">New</NavLink>
          </li>
          <li>
            <NavLink to="/">Popular</NavLink>
          </li>
          <li>
            <NavLink to="/">Trending</NavLink>
          </li>
          <li>
            <NavLink to="/">Categories</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
