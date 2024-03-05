import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footer-content">
            <div className="text">
                <p>2024 @devarsheecodess</p>
            </div>
            <div className="socials">
                <h5>Connect with me on</h5>
                <div className="logo">
                    <i class="fa-brands fa-instagram footer-icons"></i>
                    <i class="fa-brands fa-square-x-twitter footer-icons"></i>
                    <i class="fa-brands fa-linkedin footer-icons"></i>
                    <i class="fa-brands fa-square-github footer-icons"></i>
                    <i class="fa-brands fa-facebook footer-icons"></i>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;