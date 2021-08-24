import React from 'react'
import '../App.css';

function Sixsection() {
    return (
        <footer>
            <div className="footer-content">
                <div className="foot-logo content">
                    <h1>.foodish</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="foot-links content">
                    <h3>Links</h3>
                    <p>Home</p>
                    <p>Menu</p>
                    <p>About</p>
                    <p>Contact us</p>
                </div>
                <div className="foot-legal content">
                    <h3>legal</h3>
                    <p>Terms</p>
                    <p>Policy</p>
                </div>
                <div className="foot-time content">
                    <h3>open times</h3>
                    <p>MON - FRI : 9 : 00 AM - 6 : 00 PM</p>
                    <p>SAT - SUN : 10 : 00 AM - 4 : 00 PM</p>
                    <p>Brgy. 02 Patricio St. John Bldg.</p>
                    <p>Catanuan Quezon 4311</p>
                </div>
            </div>
            <p className="outro">All rights reserved.</p>
            <p className="outro">©2021 Copyright. Created by PATRICK</p>
        </footer>
    )
}

export default Sixsection
