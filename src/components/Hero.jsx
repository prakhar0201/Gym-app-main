import React from 'react'
import Header from './header/Header'
import "./Hero.css"
import Heart from '../assets/heart.png'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Calories from '../assets/calories.png'
import { Link } from 'react-scroll';
import NumberCounter from 'number-counter';


const Hero = () => {
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-side">
                <Header />
                <div className="the-best-ad">
                    <div className='empty-div'></div>
                    <span>The best fitness club in Indore</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div >
                        <span>In here we will help you to shape and build your ideal body and live up to your life to fullest</span>
                    </div>
                </div>

                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={150} start={100} delay='4' preFix='+' />
                        </span>
                        <span>Expert trainers</span>
                    </div>
                    <div>
                        <span><NumberCounter end={1000} start={700} delay='4' preFix='+' /></span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={10} delay='4' preFix='+' /></span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-side">
                <button className="btn" style={{width:"6rem",fontSize:"bold"}}><Link
                    to='join-us'
                    spy={true}
                    smooth={true}
                >Join Now</Link></button>
                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>
                <img src={hero_image} className="hero-image" alt="" />
                <img src={hero_image_back} alt="" className="hero-image-back" />

                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero