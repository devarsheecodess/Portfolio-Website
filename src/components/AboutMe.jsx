import react from "react";
import "./AboutMe.css";
import aboutImg from "./assets/aboutPic.png";
import Cyber from "./certificates/Cybersecurity-1.png";
import TCS from "./certificates/Devarshee_Gaunekar_TCS ion-1.png";
import WebDev from "./certificates/Introduction to web development.jpg";

function AboutMe() {
  return (
    <div className="about fade-in">
      <div className="Home">
        <div className="home-text-upper">
          <div className="home-heading">
            <h1>Devarshee Gaunekar</h1>
            <div className="text">
              <h5>
                <span id="element"></span>
              </h5>
            </div>
          </div>
          <div className="header-text">
            <p>
              Greetings! I'm Devarshee Gaunekar, a dedicated Fullstack Developer
              currently in my second year at GEC Goa. My journey into the world
              of programming ignited during my high school days, and since then,
              I've been wholeheartedly immersed in the art of crafting digital
              solutions. Proficient in both frontend and backend development, I
              find immense joy in bringing ideas to life through code. What sets
              me apart is my insatiable curiosity and eagerness to explore the
              latest technologies and trends in the ever-evolving realm of
              software development. Whether it's designing elegant user
              interfaces or architecting robust backend systems, I approach each
              project with creativity, attention to detail, and a relentless
              pursuit of excellence. Beyond coding, I'm an avid reader of tech
              blogs, a frequent participant in hackathons, and a firm believer
              in the power of collaboration. I thrive in diverse teams, where
              different perspectives converge to create something truly
              extraordinary. My ultimate goal is to leverage my skills and
              passion for technology to make a positive impact on the world.
              Whether it's building innovative applications that enhance user
              experiences or contributing to projects that address pressing
              societal issues, I'm committed to using my talents for good. If
              you're as passionate about technology and innovation as I am,
              let's connect and embark on this exciting journey together.
              Together, we can create solutions that not only meet the needs of
              today but also shape the possibilities of tomorrow. Let's
              collaborate, innovate, and make a difference.
            </p>
          </div>
        </div>
        <div className="home-img">
          <img src={aboutImg} alt="Home"></img>
        </div>
      </div>
      <hr></hr>

      <div className="certificates">
        <div className="certificates-text">
          <h3>My Certificates</h3>
        </div>
        <div className="showcase">
          <div className="images-container">
            <marquee>
              <img src={TCS} alt="TCS" />
              <img src={WebDev} alt="Web Development" />
              <img src={Cyber} alt="Cyber" />
              <img src={TCS} alt="TCS" />
              <img src={WebDev} alt="Web Development" />
              <img src={Cyber} alt="Cyber" />
              <img src={TCS} alt="TCS" />
              <img src={WebDev} alt="Web Development" />
              <img src={Cyber} alt="Cyber" />
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
