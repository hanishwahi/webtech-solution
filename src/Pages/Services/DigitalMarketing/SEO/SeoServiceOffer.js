import React from 'react'
import globalSEO from '../../../../Images/Global SEO.png'
import nationalSEO from '../../../../Images/National SEO.png'
import localSEO from '../../../../Images/Local SEO.png'
import enterpriceSEO from '../../../../Images/enterprise SEO.png'
import ecommerceSEO from '../../../../Images/ecommerce SEO.png'
import startupSEO from '../../../../Images/start-up SEO.png'

function SeoServiceOffer() {


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
                                        <img src={globalSEO} alt="" loading='lazy' width={61} />
                                    </div>
                                </div>
                                <h2>Global SEO</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={nationalSEO} alt="" loading='lazy' width={55} />
                                    </div>
                                </div>
                                <h2>National SEO</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={localSEO} alt="" loading='lazy' width={59} />
                                    </div>
                                </div>
                                <h2>Local SEO</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={enterpriceSEO} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Enterprise SEO</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={ecommerceSEO} alt="" loading='lazy' width={62} />
                                    </div>
                                </div>
                                <h2>E-Commerce SEO</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={startupSEO} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Start-Up SEO</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>

        </>
    )
}

export default SeoServiceOffer