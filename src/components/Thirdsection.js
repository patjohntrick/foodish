import React from 'react'
import '../App.css';
import Line from './Line';
import Daria from '../img/Daria-Shevtsova.jpg';
import Christel from '../img/Christel Jensen.jpg';
import Marta from '../img/Marta Dzedyshko.jpg';

function Thirdsection() {
    return (
        <section className="third-section">
            <div className="third-section-content">
                <div className="text-container wrapper">
                    <Line />
                    <h1>Choose and taste to your place</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</p>
                </div>


                <div className="text-pic wrapper">

                    <div className="first-content wrapper-content">
                        <div className="first-content-pic-container pic-content">
                            <div className="text-pic-line"></div>
                            <img src={Daria} alt="Photo by Daria Shevtsova from Pexels" />
                        </div>
                        <div className="first-content-text-container content">
                            <h3>Where the flavor inebriates you</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className="second-content wrapper-content">
                        <div className="second-content-pic-container pic-content">
                            <div className="text-pic-line"></div>
                            <img src={Christel} alt="Photo by Daria Shevtsova from Pexels" />
                        </div>
                        <div className="first-content-text-container content">
                            <h3>The pleasure variety on your plate</h3>
                            <p>Excepteur sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>

                    <div className="third-content wrapper-content">
                        <div className="third-content-pic-container pic-content">
                            <div className="text-pic-line"></div>
                            <img src={Marta} alt="Photo by Daria Shevtsova from Pexels" />
                        </div>
                        <div className="third-content-text-container content">
                            <h3>If gluttony is a sin, welcome to hell</h3>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Thirdsection
