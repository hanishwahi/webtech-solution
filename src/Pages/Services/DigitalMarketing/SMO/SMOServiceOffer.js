import React from 'react'
import Profile from '../../../../Images/SMO_ Profile.png' 
import strategy from '../../../../Images/SMO_ Strategy.png' 
import Audience from '../../../../Images/SMO_ Audience.png' 
import Hashtag from '../../../../Images/SMO_ Hashtag.png' 
import Content from '../../../../Images/SMO_ Sharing.png' 
import Analytics from '../../../../Images/SMO_ Analytics.png' 

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
                                <p>Specializing in SMO,  a vital part of modern digital marketing. Elevate brand presence and engagement via tailored strategies. In the dynamic social media landscape, SMO is essential for crafting an engaging online persona, connecting with your audience, and driving business growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Profile} alt="" loading='lazy' width={61} />
                                    </div>
                                </div>
                                <h2>Profile Optimization</h2>
                                <p>Enhancing and optimizing social media profiles to establish a strong and consistent online brand presence.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={strategy} alt="" loading='lazy' width={60} />
                                    </div>
                                </div>
                                <h2>Content Strategy</h2>
                                <p>Tailoring content to engage the audience and align with brand goals is essential for social media success.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Audience} alt="" loading='lazy' width={59} />
                                    </div>
                                </div>
                                <h2>Audience Engagement</h2>
                                <p>Building and nurturing an active and loyal online community through interactions, comments, likes, and shares.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Hashtag} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Hashtag Optimization</h2>
                                <p>Researching and implementing strategic hashtags to increase content discoverability and reach a broader audience.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Content} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Content Sharing</h2>
                                <p>Ensuring your content reaches a broader audience through strategic sharing and cross-promotion across platforms.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Analytics} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Analytics and Reporting</h2>
                                <p>Monitoring and analyzing social media activities to measure the effectiveness of campaigns and strategies.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SMOServiceOffer