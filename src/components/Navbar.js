import React, { useState } from 'react'
import '../App.css';

const Navbar = () => {
    const linkItem = ['Home', 'Menu', 'About', 'Contact us'];
    const [navBar , setnavBar] = useState(false);
    function handleChange(){
        setnavBar(!navBar);
    }
    return (
        <nav>
            <i className="fas fa-bars nav-bar" onClick={handleChange}></i>
            <div className="logo">
                <h1>.foodish</h1>
            </div>
            <ul className={navBar ? "nav-links" : "nav-links show-nav"}>
            <i className="fas fa-times nav-ex" onClick={handleChange}></i>
                {linkItem.map((item) => <li id={item}>{item}</li>)}
            </ul>
        </nav>
    )
}

export default Navbar

