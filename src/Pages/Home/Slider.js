import React from 'react'
import { Link } from 'react-router-dom'
import HomeForm from './HomeForm'

function Slider() {
    return (
        <div className="container-fluid slider-bg">
            <div className="container-xl">
                <div className="row align-items-center">
                    <div className="col-lg-6 slider-head">
                        <div>
                            <h1>Boost Your Online Presence with <span>Digital Marketing Services</span> </h1>
                        </div>
                        <div className='py-3'>
                            <div className='slider-list'>
                                <i className="fa-solid fa-check" style={{ color:"#42ADE6"}}></i>
                                <h2>Cost Effective & Scalable Solutions</h2>
                            </div>
                            <div className='slider-list'>
                                <i className="fa-solid fa-check" style={{ color: "#42ADE6" }}></i>
                                <h2>Staying Updated with Industry Trends</h2>
                            </div>
                        </div> 
                        <div className="slider-button">
                            <Link to='/contact-us'>Get In Touch </Link>
                        </div> 
                    </div>
                    <div className="col-lg-6 px-0">
                        <HomeForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider