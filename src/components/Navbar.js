import React from 'react'
import '../App.css';

const Navbar = () => {
    const linkItem = ['Home', 'Menu', 'About', 'Contact us']
    return (
        <nav>
            <div className="logo">
                <h1>.foodish</h1>
            </div>
            <ul className="nav-links">
                {linkItem.map((item) => <li id={item}>{item}</li>)}
            </ul>
        </nav>
    )
}

export default Navbar

