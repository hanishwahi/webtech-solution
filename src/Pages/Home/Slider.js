import React from 'react'
import { Link } from 'react-router-dom'

function Slider() {
    return (
        <div className="container-fluid slider-bg">
            <div className="container-xl">
                <div className="row">
                    <div className="col-lg-6 slider-head">
                        <div>
                            <h1>Boost Your Online Presence with <span>Digital Marketing Services</span> </h1>
                        </div>
                        <div className='py-3'>
                            <div className='d-flex slider-list'>
                                <i className="fa-solid fa-check" style={{color:"#42ADE4"}}></i>
                                <h2>Cost Effective & Scalable Solutions</h2>
                            </div>
                            <div className='d-flex slider-list'>
                                <i className="fa-solid fa-check" style={{color:"#42ADE4"}}></i>
                                <h2>Staying Updated with Industry Trends</h2>
                            </div>
                        </div>
                        
                            <div className="slider-button">
                             <Link>Get Started Free </Link> 
                            </div>
                         
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
    )
}

export default Slider