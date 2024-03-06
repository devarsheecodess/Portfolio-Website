import React from 'react';
import './Header.css'
import { animateScroll as scroll } from 'react-scroll';
import AboutMe from './AboutMe.jsx';

function Header(){
    function Resume(){
        alert("The resume is currently not available!")
    }

    function scrollToProjects() {
        scroll.scrollTo(2330);
    }

    function Home(){
        
    }

    return(
        <div className='header'>
            <div className="header-items-left">
                <h1>Devarshee</h1>
            </div>
            <div className="header-items-right">
                <ul>
                    <button>Home</button>
                    <button >About me</button>
                    <button onClick={scrollToProjects}>Projects</button>
                    <button>Contact</button>
                    <button onClick={Resume} id='resume'><i class="fa-solid fa-file-arrow-down"></i>Resume</button>
                    <i class="fa-solid fa-bars"></i>
                </ul>
            </div>
        </div>
    )
}

export default Header;