import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Home.css";
import image from "./assets/home image.png";
import almeida from "./assets/almeida.jpeg";
import GVMS from "./assets/GVMS.jpeg";
import GEC from "./assets/GEC.jpg";
import tailwind from "./assets/tailwind-css-icon.png";
import express from "./assets/express-js-icon.png";
import SQL from "./assets/mysql-icon.png";
import mongo from "./assets/mongodb-icon.png";
import vscode from "./assets/vscode-icon.png";
import c from "./assets/c.png";
import cpp from "./assets/c++.png";

function Home() {
  useEffect(() => {
    var typed = new Typed("#element", {
      strings: [
        "Frontend Developer",
        "Web Developer",
        "2nd year student",
        "Currently learning Fullstack Development",
      ],
      typeSpeed: 70,
      cursorChar: "",
    });
  }, []);

  return (
    <div className="Home fade-in">
      <div className="home-text-upper">
        <div className="home-heading">
          <h1>
            <span class="hi">Hi, I am </span>
            <span class="name">Devarshee Gaunekar</span>
          </h1>
          <div className="text">
            <span id="element"></span>
          </div>
        </div>
        <div className="header-text">
          <p>
            2nd-year student at Goa College Of Engineering Passionate about
            crafting innovative solutions in frontend development. Currently i
            am learning Fullstack Web Development Enthusiastic about tech
            exploration, hackathons, and collaborative projects. Committed to
            making a positive impact through coding. Let's create something
            extraordinary together!
          </p>
        </div>
      </div>
      <div className="home-img">
        <img src={image} alt="Home"></img>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="education fade-in">
      <h3>Education</h3>
      <span>
        <div className="sections">
          <i class="fa-solid fa-graduation-cap"></i>
          <i class="fa-solid fa-graduation-cap"></i>
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
        <div className="education-boxes">
          <span>
            <div className="education-boxes-text">
              <h1>A.J.De Almeida High school</h1>
              <h6>2016 - 2020</h6>
            </div>
            <img src={almeida}></img>
          </span>
          <span>
            <div className="education-boxes-text">
              <h1>GVMS SNJA Higher Secondary</h1>
              <h6>2020 - 2022</h6>
            </div>
            <img src={GVMS}></img>
          </span>
          <span>
            <div className="education-boxes-text">
              <h1>Goa Engineering College</h1>
              <h6>2022 - Present</h6>
            </div>
            <img src={GEC}></img>
          </span>
        </div>
      </span>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills fade-in">
      <h3 className=".pink-text">Skills</h3>
      <div className="frontend">
        <h2>Frontend</h2>
        <div className="logos">
          <span>
            <i class="fa-brands fa-html5"></i>
            <h4>HTML</h4>
          </span>
          <span>
            <i class="fa-brands fa-css3-alt"></i>
            <h4>CSS</h4>
          </span>
          <span>
            <i class="fa-brands fa-square-js"></i>
            <h4>JavaScript</h4>
          </span>
          <span>
            <i class="fa-brands fa-react"></i>
            <h4>React JS</h4>
          </span>
          <span>
            <img src={tailwind}></img>
            <h4>Tailwind CSS</h4>
          </span>
        </div>
      </div>
      <div className="backend">
        <h2>Backend</h2>
        <div className="logos">
          <span>
            <i class="fa-brands fa-node-js"></i>
            <h4>Node JS</h4>
          </span>
          <span>
            <img src={express}></img>
            <h4>Express JS</h4>
          </span>
          <span>
            <img src={SQL}></img>
            <h4>My SQL</h4>
          </span>
          <span>
            <img src={mongo}></img>
            <h4>Mongo DB</h4>
          </span>
        </div>
      </div>
      <div className="languages">
        <h2>Programming languages</h2>
        <div className="logos">
          <span>
            <img src={c}></img>
            <h4>C</h4>
          </span>
          <span>
            <img src={cpp}></img>
            <h4>C++</h4>
          </span>
          <span>
            <i class="fa-brands fa-java"></i>
            <h4>Java</h4>
          </span>
        </div>
      </div>
      <div className="tools">
        <h2>Tools</h2>
        <div className="logos">
          <span>
            <i class="fa-brands fa-git-alt"></i>
            <h4>Git</h4>
          </span>
          <span>
            <i class="fa-brands fa-github"></i>
            <h4>Github</h4>
          </span>
          <span>
            <img src={vscode} id="vscode"></img>
            <h4>VS Code</h4>
          </span>
          <span>
            <i class="fa-brands fa-figma"></i>
            <h4>Figma</h4>
          </span>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects fade-in">
      <h3>Projects</h3>
      <div className="showcase">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

function LoadHome() {
  return (
    <>
      <Home />
      <Education />
      <Skills />
      <Projects />
    </>
  );
}



export default LoadHome;