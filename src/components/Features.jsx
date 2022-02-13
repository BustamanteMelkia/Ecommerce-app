import React from 'react';
import splashScreen from '../assets/images/mobile_clipped.png';
import mobile from '../assets/images/mobile.png';
import mobile2 from '../assets/images/mobile2.png';
import saly from '../assets/images/Saly-1.png';
import './Features.css';

const Features = () => {
    return (
        <section className='features'>
            <div className="wrapper">
                <h2 className='features__title'>How the app works</h2>
                <article className='feature'>
                    <figure className='feature__img'>
                        <img src={splashScreen} alt='Splash screen' />
                    </figure>
                    <div className='feature__content'>
                        <h3 className='feature__subtitle'>Create an account</h3>
                        <h2 className='feature__title'>Discover original products</h2>
                        <p className='feature__description'>There are more than 950 categories updated daily based on trending websites reviews an users rating.</p>
                    </div>
                </article>
                <article className='feature'>
                    <div className='feature__content'>
                        <h2 className='feature__title'>Experience products in AR</h2>
                        <p className='feature__description'>Have you tried Augmented Reality? Stop looking at boring galleries and start experiences each item.</p>
                    </div>
                    <figure className='feature__img'>
                        <img src={mobile} alt='Mobile applicacion' />
                    </figure>
                    <div className="circle circle--xl circle--pink"></div>
                    <div className="circle circle--lg circle--purple"></div>
                    <div className="circle circle--md circle--pink"></div>
                    <div className="circle circle--sm circle--purple"></div>
                </article>
                <article className='feature'>
                    <figure className='feature__img'>
                        <img src={mobile2} alt='Mobile applicacion' />
                    </figure>
                    <div className='feature__content'>
                    <h3 className='feature__subtitle'>Original platform</h3>
                        <h2 className='feature__title'>Hottest deals around the web</h2>
                        <p className='feature__description'>
                            Find the perfect gift or everyday goods right at your fingertips.
                        </p>
                    </div>
                </article>
                <article className='feature'>
                    <div className='feature__content'>
                        <p className='feature__description'>
                            Save time & money with exclusive offers from top stores
                        </p>
                        <button className='btn btn--primary'>Download App</button>
                    </div>
                    <figure className='feature__img'>
                        <img src={saly} alt='Mobile applicacion' />
                    </figure>
                </article>
            </div>
        </section>
    );
};
export default Features