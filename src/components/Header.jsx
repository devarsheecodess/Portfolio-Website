import React from "react";
import "./Header.css";
import { animateScroll as scroll } from "react-scroll";
import AboutMe from "./AboutMe.jsx";
import { NavLink } from "react-router-dom";

function Header() {
  function Resume() {
    alert("The resume is currently not available!");
  }

  function scrollToProjects() {
    scroll.scrollTo(2330);
  }

  return (
    <div className="header">
      <div className="header-items-left">
        <h1>Devarshee</h1>
      </div>
      <div className="header-items-right">
        <ul>
          <a>
            <NavLink
              className={(e) => {
                return e.isActive ? "underline" : "nav";
              }}
              to="/"
            >
              <li>Home</li>
            </NavLink>
          </a>
          <a>
            <NavLink
              className={(e) => {
                return e.isActive ? "underline" : "nav";
              }}
              to="/about"
            >
              <li>About Me</li>
            </NavLink>
          </a>
          <a>
            <NavLink
              className={(e) => {
                return e.isActive ? "underline" : "nav";
              }}
              to="/projects"
            >
              <li onClick={scrollToProjects}>Projects</li>
            </NavLink>
          </a>
          <a>
            <NavLink
              className={(e) => {
                return e.isActive ? "underline" : "nav";
              }}
              to="/contact"
            >
              <li>Contact</li>
            </NavLink>
          </a>
          <button onClick={Resume} id="resume">
            <i class="fa-solid fa-file-arrow-down"></i>Resume
          </button>
          <i className="fa-solid fa-bars"></i>
        </ul>
      </div>
    </div>
  );
}

export default Header;
