import React from 'react'
import '../App.css';
import Whitebtn from './Whitebtn.js';
import keiPhoto from '../img/kei.png'; 

function Introduction() {
    return (
        <div className="intro">
            <div className="text-container">
                <h1>The secret ingredients is always us</h1>
                <p>Deliciousness jumping into the mouth. Life’s too short for boring food. Wake up your taste buds.</p>
                <Whitebtn />
            </div>
                <img src={keiPhoto} alt="Photo by Kei from Pexels" />
        </div>
    )
}

export default Introduction

