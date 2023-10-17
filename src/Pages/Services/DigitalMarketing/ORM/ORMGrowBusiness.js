import React from 'react'
import keywoardsuggest from '../../../../Images/Keyword Suggestions.png'
import Social from '../../../../Images/ORM_in_ Social.png'
import Profile from '../../../../Images/ORM_in_ Profile.png'
import Advertising from '../../../../Images/Search Advertising.png'
import Legal from '../../../../Images/ORM_in_ Legal.png'
import Scheduled from '../../../../Images/Scheduled Posting.png'

import Strategy from '../../../../Images/ORM2_ Strategy.png'
import Promotion from '../../../../Images/ORM2_ content.png'
import Review from '../../../../Images/ORM2_ Review.png'
import SEO from '../../../../Images/ORM2_ SEO.png'
import Analysis from '../../../../Images/ORM2_ Analysis.png'



function ORMGrowBusiness() {
    return (
        <>
            <div className="container-fluid seo-growbusiness">
                <div className="container-xl">
                    <div className="row growbusiness-text">
                        <h1>How Can We Help You Grow Your Business through ORM? </h1>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box  '>
                                <img src={Strategy} alt="" width={55} />
                                <h2>(ORM) Strategy</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={Promotion} alt="" width={55} />
                                <h2>Content Creation and Promotion</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={Review} alt="" width={55} />
                                <h2>Review and Feedback</h2>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={SEO} alt="" width={55} />
                                <h2>SEO and Online Visibility</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={Analysis} alt="" width={55} />
                                <h2> Analysis and Benchmarking</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid  mb-5">
                <div className="container-xl">
                    <div className="row seo-work">
                        <h1>Our ORM Work Includes</h1>
                        <p>ORM is a monitoring and improving business model to drive traffic to websites. It analyses potential customers, reporters, and partners to discover products and services when someone searches on Google.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={keywoardsuggest} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Search Engine Optimization (SEO)</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Optimising SEO content helps in improving SERP ranking and visibility and also push down the negative content and feedback down on Google search results.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Social} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Social Media Management</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>SMM monitors and manages social media profile to maintain its online image which includes content creation, targeting audience.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Profile} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Profile Building</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>By building strong profile and optimising profile on different platform helps to build positive image on various Social Media Platforms and websites.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Advertising} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Competitor Analysis</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>By developing latest strategies and evaluating online reputation of brand’s competitors helps to outperform them.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Scheduled} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Content Creation and Management</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>It includes creating blog posts, articles, and other media for promoting brand and business to enhance online reputation.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Legal} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3> Legal and Takedown Services</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>ORM offers legal assistance and to the companies for whom the negative content is published. It includes sending cease letters and taking legal action to protect your reputation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ORMGrowBusiness