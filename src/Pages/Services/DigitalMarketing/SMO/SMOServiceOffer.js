import React from 'react'
import contentpromotion from '../../../../Images/Content Promotion.png'
import multichannel from '../../../../Images/Multichannel.png'
import socialmediaadv from '../../../../Images/Social media advertising.png'
import socialmediaaud from '../../../../Images/Social media Audit.png'
import socialmonitoring from '../../../../Images/Social monitoring.png'
import trackingreporting from '../../../../Images/Tracking reporting.png'

function SMOServiceOffer() {


    return (
        <>
            <div className="container-fluid DM-box-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className='DMserviceOffer'>
                                <h1>Service We Offer</h1>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className='DMserviceOffer'>
                                <p>Whether you're an enterprise client or a unicorn startup, our extensive range of app development services has you covered. Customised iOS & Android apps engineered to perfection. Tailored to your needs from scratch.Your vision, our expertise.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={contentpromotion} alt="" loading='lazy' width={61} />
                                    </div>
                                </div>
                                <h2>Content Promotion</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={multichannel} alt="" loading='lazy' width={60} />
                                    </div>
                                </div>
                                <h2>Multichannel</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={socialmediaadv} alt="" loading='lazy' width={59} />
                                    </div>
                                </div>
                                <h2>Social Media Advertising</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={socialmediaaud} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Social Media Audit</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={socialmonitoring} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Social Monitoring</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={trackingreporting} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Tracking Reporting</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SMOServiceOffer