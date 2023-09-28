import React from 'react'
import logodesigning from './../../../Images/Logo Designing.png'
import socialmediadesign from './../../../Images/SocialMEdiaDesign.png'
import webbanner from './../../../Images/Web banner.png'
import flyerdesign from './../../../Images/Flyer Design.png'
import broucher from './../../../Images/Broucher.png'
import visitingcard from './../../../Images/Visiting Card.png'

function GraphicServiceOffer() {
    return (
        <>
            <div className="container-fluid graphic-box-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className='graphicserviceOffer'>
                                <h1>Service We Offer</h1>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className='graphicserviceOffer'>
                                <p>Whether you're an enterprise client or a unicorn startup, our extensive range of app development services has you covered. Customised iOS & Android apps engineered to perfection. Tailored to your needs from scratch.Your vision, our expertise.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={logodesigning} alt=""  loading='lazy' width={120} />
                                    </div>
                                </div>
                                <h2>Logo Designing</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={socialmediadesign} alt=""  loading='lazy' width={124} />
                                    </div>
                                </div>
                                <h2>Social Media Design</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={webbanner} alt=""  loading='lazy' width={225} />
                                    </div>
                                </div>
                                <h2>Web Banners</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={broucher} alt=""  loading='lazy' width={165} />
                                    </div>
                                </div>
                                <h2>Broucher Design</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={flyerdesign} alt=""  loading='lazy' width={205} />
                                    </div>
                                </div>
                                <h2>Flyer Design</h2>
                                <p>Web Tech Solutions Services specialise in creating mobile apps with strong code</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='graphicserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={visitingcard} alt=""  loading='lazy' width={163} />
                                    </div>
                                </div>
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

export default GraphicServiceOffer