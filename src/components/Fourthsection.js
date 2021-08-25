import React from 'react'
import '../App.css';
import Line from './Line.js';
import cottonbro from "../img/cottonbro.jpg"
import Agung from '../img/Agung Pandit Wiguna.jpg';
import Blckbtn from './Blackbtn.js';
import Lines from './Lines';

function Fourthsection() {
    return (
        <section className="fourth-section">
            <div className="pic-container content">
                <img src={Agung} alt="Photo by Agung Pandit Wiguna from Pexels" />
            </div>
            <div className="text-container content">
                <Line />
                <Lines />
                <h1>Wedding Event</h1>
                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Blckbtn />
                <div className="category">
                    <h4 className="ftext text">family gathering</h4>
                    <h4 className="stext text">friends bonding</h4>
                    <h4 className="ttext text">wedding event</h4>
                </div>
            </div>
        </section>
    )
}

export default Fourthsection
