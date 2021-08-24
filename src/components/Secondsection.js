import React from 'react'
import '../App.css';
import Line from './Line';
import Lines from './Lines';
import Rectangleinverted from './Rectangleinverted.js';
import Dapur from '../img/DapurMelodi.jpg'

function Firstsection() {
    return (
        <section className="second-section">
            <Rectangleinverted />
            <Lines />
            <div className="text-container content">
                <Line />
                <h1>If you don’t lick your fingers, enjoy only half</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="pic-container content">
                <img src={Dapur} alt="Photo by Adrien Olichon from Pexels" />
            </div>
        </section>
    )
}

export default Firstsection
