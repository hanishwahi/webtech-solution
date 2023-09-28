import React from 'react'
import android from './../../../Images/android.png'
import ios from './../../../Images/IOS.png'

function ServiceOffer() {
    return (
        <>
            <div className="container-fluid service-box-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className='graphicserviceOffer'>
                                <h1>Service We Offer</h1> 
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className='graphicserviceOffer'>
                            <p>Whether you're an enterprise client or a unicorn startup, our extensive range of app development services has you covered.
                                    Customised iOS & Android apps engineered to perfection. Tailored to your needs from scratch.Your vision, our expertise.</p>
                                 
                            </div>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <img src={android} alt="" />
                                <h2>Logo Designing</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <img src={android} alt="" />
                                <h2>Social Media Design</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <img src={android} alt="" />
                                <h2>Web Banners</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <img src={android} alt="" />
                                <h2>Broucher Design</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <img src={android} alt="" />
                                <h2>Flyer Design</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p> 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <img src={android} alt="" />
                                <h2>Visiting Card Design</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p> 
                            </div>
                        </div>
                      

                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceOffer