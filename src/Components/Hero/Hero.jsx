import React from 'react';
import './Hero.css';
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure better education for a better world!</h1>
                <p>Prepare for a successful future with industry-relevant programs and hands-on learning.
                    Get the knowledge, tools, and confidence to build the career you want."
                </p>
                <button className='btn'>Explore more <img src={dark_arrow} alt='' />
                </button>
            </div>
        </div>
    )
}

export default Hero;