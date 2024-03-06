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
                    <a href="https://instagram.com/devarsheegaunekar" target="_blank"><i class="fa-brands fa-instagram footer-icons"></i></a>
                    <a href="https://twitter.com/devarsheecodess" target="_blank"><i class="fa-brands fa-square-x-twitter footer-icons"></i></a>
                    <a href="https://linkedin.com/in/devarshee-gaunekar-a06441257/" target="_blank"><i class="fa-brands fa-linkedin footer-icons"></i></a>
                    <a href="https://github.com/devarsheecodess" target="_blank"><i class="fa-brands fa-square-github footer-icons"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100066272635870" target="_blank"><i class="fa-brands fa-facebook footer-icons"></i></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer;