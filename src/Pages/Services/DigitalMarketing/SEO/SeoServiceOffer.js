import React from 'react'
import keyword from '../../../../Images/SEO_ Keyword.png' 
import technical from '../../../../Images/SEO_ Technical.png' 
import onpage from '../../../../Images/SEO_ On-Page.png' 
import offpage from '../../../../Images/SEO_ Off-Page.png' 
import localseo from '../../../../Images/SEO_ Local.png' 
import competitor from '../../../../Images/SEO_ Competitor.png' 
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
                                <p>As a leading SEO company, we have a proven track record of guiding clients through Google's ever-evolving algorithms. Let us lead you on your SEO journey, enhancing your online presence, increasing sales, and generating valuable leads. Explore our key services below.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={keyword} alt="" loading='lazy' width={61} />
                                    </div>
                                </div>
                                <h2>Keyword Research & Strategy</h2>
                                <p>Efficiently uncover high-impact keywords and develop strategic plans for optimal search engine visibility.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={technical} alt="" loading='lazy' width={55} />
                                    </div>
                                </div>
                                <h2>Technical SEO</h2>
                                <p> Ensure website performance and indexing by addressing technical issues and enhancing site architecture.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={onpage} alt="" loading='lazy' width={59} />
                                    </div>
                                </div>
                                <h2>On-Page SEO</h2>
                                <p>On-Page SEO focuses on optimizing web pages to improve their search engine rankings and user experience.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={offpage} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Off-Page SEO</h2>
                                <p>Off-page SEO involves building a strong online presence through strategies like link-building and social signals.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={localseo} alt="" loading='lazy' width={55} />
                                    </div>
                                </div>
                                <h2>Local SEO</h2>
                                <p>Local SEO targets geographic search results, ensuring your business shines in local listings and maps.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={competitor} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Competitor Analysis</h2>
                                <p>Stay ahead in your industry by leveraging competitor analysis to make informed decisions and gain a competitive edge.</p>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>

        </>
    )
}

export default SeoServiceOffer