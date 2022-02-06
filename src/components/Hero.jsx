import React from 'react';
import './Hero.css';
import heroImg from '../assets/images/hero.png';
const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="wrapper">
                    <div className="hero__content">
                        <h1 className='hero__title'>Shopping App for Gadgets and Gifts</h1>
                        <p className='hero__description'>
                            Get 10% off your first order when you spend over £40 on any product!
                        </p>
                        <button className='btn btn--primary'>Download App</button>
                    </div>
                    <figure className='hero__img'>
                        <img src={heroImg} alt="Hero" />
                    </figure>
                </div>
            </section>
        </>
    );
}
 
export default Hero;