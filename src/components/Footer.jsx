import React from 'react';
import socialmedia from '../assets/images/socialmedia.png';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="wrapper">

                <div className="footer__content">
                    <p className='footer__text'>Hey! Follow us on social media so you don’t miss any offer.</p>
                    <figure className='footer__img'>
                        <img src={socialmedia} alt="Social media" />
                    </figure>
                </div>
                <p className="footer__copyright">Copywright 2022 <span className='footer__autor'>Melquiades Bustamante</span></p>
            </div>
        </footer>
    );
}
 
export default Footer;