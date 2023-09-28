import React from 'react'
import android from './../../../Images/android.png'
import ios from './../../../Images/IOS.png'

function ServiceOffer() {
    return (
        <>
            <div className="container-fluid service-box-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <div className='serviceOffer'>
                                <h1>Service <span>We Offer</span></h1>
                                <p>Whether you're an enterprise client or a unicorn startup, our extensive range of app development services has you covered.
                                    Customised iOS & Android apps engineered to perfection. Tailored to your needs from scratch.Your vision, our expertise.</p> <br />
                                <ul>
                                    <li>Start-ups Mobile App</li>
                                    <li>Cross-platform mobile app</li>
                                    <li>Native iOS and Android App</li>
                                    <li>Mobile App Design</li>
                                    <li>Product Development</li>
                                    <li>Workflow Management App</li> 
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={android} alt="" />
                                <h2>Android App Development</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p> <br />
                                <ul>
                                    <li>Android App Development</li>
                                    <li>Android UI/UX Design</li>
                                    <li>Android App Upgrade</li>
                                    <li>Support and Maintenance</li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={ios} alt="" />
                                <h2>IOS App Development</h2>
                                <p>We offer a solution for every requirement you have, from creating an iOS application </p> <br />
                                <ul>
                                    <li>iOS App Development</li>
                                    <li>iOS UI/UX Designing</li>
                                    <li>Migration to the iOS Platform</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceOffer