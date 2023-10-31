import React from 'react'
import FlipkartADS from '../../../Images/Flipkart_ Ads.png'
import Brand from '../../../Images/Flipkart_ Stores.png'
import Video from '../../../Images/Flipkart_ Vedio.png'
import Promotions from '../../../Images/Flipkart_ Promotion.png'
import Analytics from '../../../Images/Flipkart_ Insight.png'
import Sponsored from '../../../Images/Flipkart_ Brand.png'

function FlipkartService() {

    return (
        <div className="container-fluid amazon-box-bg">
            <div className="container-xl">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className='amazonserviceOffer'>
                            <h1>Service We Offer</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <div className='amazonserviceOffer'>
                            <p>Flipkart Marketing Services provides a range of advertising and promotional solutions to help businesses, brands, and sellers enhance their visibility and sales on the Flipkart e-commerce platform.</p>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={FlipkartADS} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Flipkart Ads</h2>
                            <div className="border-bottom"></div>
                            <p>Advertisers manage advertising campaigns, targeting specific customer segments based on interests, and shopping behavior.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={Brand} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Brand Stores</h2>
                            <div className="border-bottom"></div>
                            <p>Branded shopping experience by designing customized brand stores to showcase their products in a unique environment.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={Video} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Flipkart Video Ads</h2>
                            <div className="border-bottom"></div>
                            <p>Use video content to engage their audience and promote their products effectively  the power of video marketing.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={Promotions} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Promotions and Deals</h2>
                            <div className="border-bottom"></div>
                            <p>Run promotional campaigns, offer discounts, and special events to attract customers with irresistible offers.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={Analytics} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Analytics and Insights</h2>
                            <div className="border-bottom"></div>
                            <p>Access to valuable data and analytics tools to measure the performance of marketing campaigns, gain insights into customer.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={Sponsored} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Sponsored Brand</h2>
                            <div className="border-bottom"></div>
                            <p>Create campaigns to increase brand awareness and showcase their product range through custom ad creatives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipkartService