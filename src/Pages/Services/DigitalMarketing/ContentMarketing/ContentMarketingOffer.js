import React from 'react'
import SearchAds from '../../../../Images/Search Ads.png'
import DisplayAds from '../../../../Images/Display Ads.png'
import Remarketing from '../../../../Images/Remarketing.png'
import ListingAds from '../../../../Images/Product Listing Ads.png'
import ShoppingAds from '../../../../Images/Google Shopping Ads.png'
import MobileAdvertising from '../../../../Images/Mobile Advertising.png'

function ContentMarketingOffer() {


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
                                <h2>Content Strategy Development:</h2>
                                <p>Content strategy development is the roadmap to success, aligning your content with business goals for a purposeful and impactful online presence.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={DisplayAds} alt="" loading='lazy' width={60} />
                                    </div>
                                </div>
                                <h2>Content Creation</h2>
                                <p>Content creation is the campaign's heart, bringing ideas to life as blog posts, articles, and videos. It aims for relevance, value, and engagement, keeping the audience engaged.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Remarketing} alt="" loading='lazy' width={59} />
                                    </div>
                                </div>
                                <h2>Content Distribution and Promotion</h2>
                                <p>Creating top content is just the start. Distributing and promoting it via social media, email, and partnerships maximizes its reach and impact.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={ListingAds} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>SEO Optimization</h2>
                                <p>SEO boosts content visibility in search results through keyword research and on-page optimization. It's vital for attracting organic website traffic.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={ShoppingAds} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Content Performance Analysis</h2>
                                <p>Analyzing content performance is vital for refining your strategy. Tracking metrics like engagement and demographics guides data-driven optimizations.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={MobileAdvertising} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Social Media Management</h2>
                                <p>Social media management boosts engagement through content creation on different platforms, reaching and interacting with your audience effectively.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ContentMarketingOffer