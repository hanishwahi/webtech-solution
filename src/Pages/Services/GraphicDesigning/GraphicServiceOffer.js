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
                                <p>Discover our graphic design expertise crafting your vision into reality. We excel in logos, brand identity, print materials, web graphics, and more. Elevate your ideas with our captivating visuals. Explore our services below.</p>

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
                                <p>Craft a unique brand identity through our professional logo design expertise.</p>
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
                                <p>Eye-catching, engaging social media graphics that make your brand shine</p>
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
                                <p>Captivate your audience with stunning web banners that drive engagement.</p>
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
                                <p>Communicate your message effectively through professionally designed brochures.</p>
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
                                <p>Make a strong impact with persuasive flyer designs for your marketing needs.</p>
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
                                <p>Leave a lasting impression with well-crafted, unique visiting card designs.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default GraphicServiceOffer