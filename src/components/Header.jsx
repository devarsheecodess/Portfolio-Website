import React from 'react';
import './Header.css'

function Header(){
    return(
        <div className='header'>
            <div className="header-items-left">
                <h1>Devarshee</h1>
            </div>
            <div className="header-items-right">
                <ul>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <button><i class="fa-solid fa-file-arrow-down"></i>Resume</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;