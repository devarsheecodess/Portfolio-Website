import React from 'react';
import './Header.css'

function Header(){
    function Resume(){
        alert("The resume is currently not available!")
    }

    return(
        <div className='header'>
            <div className="header-items-left">
                <h1>Devarshee</h1>
            </div>
            <div className="header-items-right">
                <ul>
                    <button>Home</button>
                    <button>About me</button>
                    <button>Projects</button>
                    <button>Contact</button>
                    <button onClick={Resume} id='resume'><i class="fa-solid fa-file-arrow-down"></i>Resume</button>
                    <i class="fa-solid fa-bars"></i>
                </ul>
            </div>
        </div>
    )
}

export default Header;