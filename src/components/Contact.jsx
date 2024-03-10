import React from "react";
import './Contact.css'
import image from './assets/contactpage.png'

function Contact(){
    return(
    <div className="contact">
        <div className="banner">
            <img src={image} alt="" />
        </div>

        <div className="contact-contents">
            <div className="contact-text">
                <h1>Talk With Us</h1>
                <p>Questions, Comments, or suggestions? SImply fill in the form and we'll be in touch shortly</p>
            </div>
            <div className="contact-form">
                <div className="form">
                    <div className="name">
                        <input type="text" placeholder="First Name*"></input>
                        <input type="text" placeholder="Last Name*"></input>
                    </div>
                    <input type="text" placeholder="Email*"></input>
                    <input type="text" placeholder="Phone Number*"></input>
                    <textarea placeholder="Your Message..." id="message"></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact