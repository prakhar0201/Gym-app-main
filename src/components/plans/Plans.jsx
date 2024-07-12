import React from 'react'
import './plans.css'
import { plansData } from '../../data/plansData.js';
import WhiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    return (
        <div className='plans-container' id='plan'>
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span className='price'>$ {plan.price}</span>
                        <div className="features">
                            {plan.features.map((features, i) => (
                                <div className="feature">
                                    <img src={WhiteTick} alt="" />
                                    <span key={i}>{features}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span className='see-more-benefits'>See more benefits</span>
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans