import React from 'react';
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <header>
            <figure>
                <img src={logo} alt="Logo" />
            </figure>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;