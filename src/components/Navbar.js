import React from 'react';
import logo from '../img/pokedex.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div id="header">
            <img src={logo} alt="" id="logo"/>
            <ul>
                <Link className='links' to="/">
                    <li>Home</li>
                </Link>

                <Link className='links' to="/about">
                    <li>About</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar;