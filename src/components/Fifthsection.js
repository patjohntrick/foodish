import React from 'react'
import '../App.css';
import Whitebtn from './Whitebtn.js';
import Brooke from '../img/Brooke-Lark.jpg';

function Fifthsection() {
    return (
        <div className="fifth-section">
            <div className="overlay"></div>
            <img src={Brooke} alt="Photo by Brooke Lark from Pexels" />
            <div className="text-container">
            <h1>Need a reservation?</h1>
            <Whitebtn />
            </div>
        </div>
    )
}

export default Fifthsection
