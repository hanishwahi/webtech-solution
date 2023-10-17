import React from 'react'
import community from '../../../../Images/SMM_ Community.png' 
import strategy from '../../../../Images/SMM_ Strategy.png' 
import advertising from '../../../../Images/SMM_ Advertising.png' 
import analytics from '../../../../Images/SMM_ Reporting.png' 
import content from '../../../../Images/SMM_ Content.png' 
import influencer from '../../../../Images/SMM_ Influencer.png' 
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
                                <p>Our social media marketing services leverage data-driven strategies and campaign monitoring to enhance brand visibility, boost search traffic, improve SEO, engage customers, and foster brand loyalty. Explore our key services below.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={community} alt="" loading='lazy' width={61} />
                                    </div>
                                </div>
                                <h2>Community Management</h2>
                                <p>Nurture and grow your online community through active interaction, fostering meaningful connections and brand loyalty.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={strategy} alt="" loading='lazy' width={60} />
                                    </div>
                                </div>
                                <h2>Social Media Strategy</h2>
                                <p>Develop a strategic plan tailored to your brand's goals and audience, ensuring an effective online presence and engagement.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={advertising} alt="" loading='lazy' width={59} />
                                    </div>
                                </div>
                                <h2>Social Media Advertising</h2>
                                <p>Maximize audience engagement and conversions with strategic paid social media campaigns, boosting platform traffic.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={analytics} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Analytics and Reporting</h2>
                                <p>Utilize data-driven insights and reports to optimize digital marketing, ensuring maximum ROI and campaign success.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={content} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Content Creation and Management</h2>
                                <p>Craft and manage top-notch content reflecting your brand's voice and objectives while maintaining consistency.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={influencer} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Influencer Marketing</h2>
                                <p>Leverage influencers to promote your products to their engaged audience, capitalizing on their credibility and reach.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default SMOServiceOffer