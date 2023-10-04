import React from 'react'
import SearchAds from '../../../../Images/Search Ads.png'
import DisplayAds from '../../../../Images/Display Ads.png'
import Remarketing from '../../../../Images/Remarketing.png'
import ListingAds from '../../../../Images/Product Listing Ads.png'
import ShoppingAds from '../../../../Images/Google Shopping Ads.png'
import MobileAdvertising from '../../../../Images/Mobile Advertising.png'

function PPCServiceOffer() {


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
                                        <img src={SearchAds} alt="" loading='lazy' width={61} />
                                    </div>
                                </div>
                                <h2>Search Ads</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={DisplayAds} alt="" loading='lazy' width={60} />
                                    </div>
                                </div>
                                <h2>Display Ads</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Remarketing} alt="" loading='lazy' width={59} />
                                    </div>
                                </div>
                                <h2>Remarketing</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={ListingAds} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Product Listing Ads</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={ShoppingAds} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Google Shopping Ads</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={MobileAdvertising} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Mobile Advertising</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos, impedit dfd aspernatur ipsam magnam consequatur.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default PPCServiceOffer