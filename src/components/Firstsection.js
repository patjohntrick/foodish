import React from 'react'
import '../App.css';
import Line from './Line';
import Rectangle from './Rectangle.js';
import Adrien from '../img/Adrien-Olichon.jpg';

function Firstsection() {
    return (
        <section className="first-section">
            <Rectangle />
            <div className="pic-container content">
                <img src={Adrien} alt="Photo by Adrien Olichon from Pexels" />
            </div>
            <div className="text-container content">
                <Line />
                <h1>Where food speaks with your plate</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </section>
    )
}

export default Firstsection
