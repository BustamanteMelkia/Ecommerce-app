import React from 'react';
import logo from '../assets/images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="wrapper">
                <figure className='header__brand'>
                    <img src={logo} alt="Logo" />
                </figure>
                <nav className='header__navbar'>
                    <ul className='navbar'>
                        <li className='navbar__item'><a className='navbar__link navbar__link--active' href="#!">Home</a></li>
                        <li className='navbar__item'><a className='navbar__link' href="#!">Team</a></li>
                        <li className='navbar__item'><a className='navbar__link' href="#!">Faq</a></li>
                        <li className='navbar__item'><a className='navbar__link' href="#!">Contact</a></li>
                    </ul>
                </nav>
                <div className='header__btn'>
                    <button className='btn btn--pink'>Download App</button>
                </div>
            </div>
        </header>
    );
}
 
export default Header;