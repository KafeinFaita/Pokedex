import React from 'react';
import logo from '../img/pokedex.png'

const Navbar = () => {
    return (
        <div id="header">
            <img src={logo} alt="" id="logo"/>
            {/* <ul>
                <li>Home</li>
                <li>About</li>
            </ul> */}
        </div>
    )
}

export default Navbar;