import React from 'react'
import '../../styles/hero.css';
import heroDarkImg from '../../pictures/hero-img.png'
import lightImg from '../../pictures/light-hero-bg.jpg'
const Hero = ({theme}) => {
    return(
            <section className="hero__section" id="home">
                <div className="container">
                    <div className="hero__wrapper">
                        <div className="hero__content">
                            <div>
                                <h2>Models and</h2>
                                <h2>Robotics Section</h2>
                                <h2 className="highlight">MaRS, IIT ROORKEE</h2>
                            </div>
                            <p className="description">We are a bunch of enthusiastic students who aim to explore, ideate and develop products over a vast range of Machine learning technologies in the IIT Roorkee campus and beyond.</p>
                            <div className="hero__btns">
                                <button className="primary__btn">Chat With Us</button>
                                <button className="secondary__btn">Discover More</button>
                            </div>
                        </div>
                        <div className="hero__img">
                            <img src={theme === "light-theme" ? lightImg : heroDarkImg} alt="Hero_Image" />
                        </div>
                    </div>
                </div>
            </section>
        );

}

export default Hero;