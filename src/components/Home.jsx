import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';
import image from './assets/home image.png';
import almeida from './assets/almeida.jpeg';
import GVMS from './assets/GVMS.jpeg';
import GEC from './assets/GEC.jpg';

function Home() {
    useEffect(() => {
        var typed = new Typed('#element', {
            strings: ['Frontend Developer', 'Web Developer' , '2nd year student', 'Currently learning Fullstack Development'],
            typeSpeed: 70,
            cursorChar: '',
        });
    }, []);
    

    return (
        <div className='Home'>
            <div className="home-text-upper">
                <div className="home-heading">
                    <h1>Hi, I am <p>Devarshee Gaunekar</p></h1>
                    <div className="text">
                        <h5><span id="element"></span></h5>
                    </div>
                </div>
                <div className="header-text">
                    <p>2nd-year student at Goa College Of Engineering
Passionate about crafting innovative solutions in frontend development. 
Currently i am learning Fullstack Web Development
Enthusiastic about tech exploration, hackathons, and collaborative projects. 
Committed to making a positive impact through coding. 
Let's create something extraordinary together!
                    </p>
                </div>
            </div>
            <div className="home-img">
                <img src={image} alt="Home"></img>
            </div>
        </div>
    );
}

function Education(){
    return(
        <div className="education">
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
    )
}

function LoadHome(){
    return(
        <>
            <Home />
            <Education />
        </>
    )
}

export default LoadHome;