import React from 'react'
import SEO from '../../../Images/SEO.png'

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
                            <p>Mindstorm offers amazon marketing services to help you manage your Amazon Ads campaigns and optimise your product listings for the best Organic sales. Our amazon advertising team is backed by a leadership experience of 10 years in Amazon Marketing.</p>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={SEO} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Registration & Listings</h2>
                            <div className="border-bottom"></div>
                            <p>We manage registration & listings on a fixed pre-decided or flexible pricing model</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={SEO} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Content Management</h2>
                            <div className="border-bottom"></div>
                            <p>Manage A+ Content Writing for Product Listings on per unit pricing model.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={SEO} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>AMS Management</h2>
                            <div className="border-bottom"></div>
                            <p>Setup & Overall Management of the Ad Account on Amazon</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={SEO} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Consultation on Reports</h2>
                            <div className="border-bottom"></div>
                            <p>Reports & Insights sourced from Amazon with Consulting</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={SEO} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Product Intelligence</h2>
                            <div className="border-bottom"></div>
                            <p>Understanding Pricing, Promotions & Customer Voice v/s competing products.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className='amazonserviceOffer-box'>
                            <div className="row text-center">
                                <div className="col">
                                    <img src={SEO} alt="" loading='lazy' width={60} />
                                </div>
                            </div>
                            <h2>Market Intelligence</h2>
                            <div className="border-bottom"></div>
                            <p>Understanding Category Visibility, Keyword Search and Analysis of reviews</p>
                        </div>
                    </div>
               

                </div>
            </div>
        </div>
    )
}

export default FlipkartService