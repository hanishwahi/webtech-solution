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
                                <p>As a leading SEO company, we have a proven track record of guiding clients through Google's ever-evolving algorithms. Let us lead you on your SEO journey, enhancing your online presence, increasing sales, and generating valuable leads. Explore our key services below.</p>

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
                                <h2>Keyword Research & Strategy</h2>
                                <p>Efficiently uncover high-impact keywords and develop strategic plans for optimal search engine visibility.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='SEOserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={nationalSEO} alt="" loading='lazy' width={55} />
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
                                        <img src={localSEO} alt="" loading='lazy' width={59} />
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
                                        <img src={enterpriceSEO} alt="" loading='lazy' width={58} />
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
                                        <img src={localSEO} alt="" loading='lazy' width={55} />
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
                                        <img src={startupSEO} alt="" loading='lazy' width={58} />
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