import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../../Images/SEO.png'
import SMM from '../../../Images/SMM.png'
import PPC from '../../../Images/PPC.png'
import SMO from '../../../Images/SMO.png'
import ContentMark from '../../../Images/Content M.png'
import ORM from '../../../Images/ORM.png'

function DMServiceOffer() {
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="container-fluid DM-box-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className='DMserviceOffer'>
                                <h1>Service We Offer</h1>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className='DMserviceOffer'>
                                <p>Discover our integrated digital marketing services, designed for online success. From strategic planning to result-driven execution, we're your partner in boosting customer acquisition and retention. Explore our key services below.</p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='DMserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={SEO} alt="" loading='lazy' width={120} />
                                    </div>
                                </div>
                                <h2>Search Engine Optimization</h2>
                                <div className="border-bottom"></div>
                                <ul>
                                    <li>Keyword Research & Strategy</li>
                                    <li>Technical SEO</li>
                                    <li>On-Page SEO</li>
                                    <li>Off-Page SEO</li>
                                    <li>Local SEO</li>
                                </ul>

                                <Link onClick={scrollToHome} to='/digital-marketing/seo'>More Info <i class="fa-solid fa-arrow-right arrow1"></i></Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='DMserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={SMM} alt="" loading='lazy' width={95} />
                                    </div>
                                </div>
                                <h2>Social Media Marketing</h2>
                                <div className="border-bottom"></div>
                                <ul>
                                    <li>Social Media Strategy</li>
                                    <li>Content Creation and Management</li>
                                    <li>Community Management</li>
                                    <li>Paid Social Advertising</li>
                                    <li>Analytics and Reporting</li>
                                </ul>

                                <Link onClick={scrollToHome} to='/digital-marketing/smm'>More Info <i class="fa-solid fa-arrow-right arrow1"></i></Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='DMserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={PPC} alt="" loading='lazy' width={135} />
                                    </div>
                                </div>
                                <h2>Pay Per Click</h2>
                                <div className="border-bottom"></div>
                                <ul>
                                    <li>Keyword Research and Analysis</li>
                                    <li>Ad Campaign Setup and Management</li>
                                    <li>Bid Management</li>
                                    <li>Ad Copywriting and A/B Testing</li>
                                    <li>Performance Tracking and Reporting</li>
                                </ul>

                                <Link onClick={scrollToHome} to='/digital-marketing/ppc'>More Info <i class="fa-solid fa-arrow-right arrow1"></i></Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='DMserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={SMO} alt="" loading='lazy' width={115} />
                                    </div>
                                </div>
                                <h2>Social Media Optimization</h2>
                                <div className="border-bottom"></div>
                                <ul>
                                    <li>Profile Setup and Optimization</li>
                                    <li>Content Strategy</li>
                                    <li>Audience Engagement</li>
                                    <li>Hashtag Research and Usage</li>
                                    <li>Analytics and Performance Tracking</li>
                                </ul>

                                <Link onClick={scrollToHome} to='/digital-marketing/smo'>More Info <i class="fa-solid fa-arrow-right arrow1"></i></Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='DMserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={ContentMark} alt="" loading='lazy' width={120} />
                                    </div>
                                </div>
                                <h2>Content Marketing</h2>
                                <div className="border-bottom"></div>
                                <ul>
                                    <li>Content Strategy Development</li>
                                    <li>Content Creation</li>
                                    <li>Content Distribution and Promotion</li>
                                    <li>SEO Optimization</li>
                                    <li>Content Performance Analysis</li>
                                </ul>

                                <Link onClick={scrollToHome} to='/digital-marketing/Content-Marketing'>More Info <i class="fa-solid fa-arrow-right arrow1"></i></Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='DMserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={ORM} alt="" loading='lazy' width={120} />
                                    </div>
                                </div>
                                <h2>Online Reputation management</h2>
                                <div className="border-bottom"></div>
                                <ul>
                                    <li>Reputation Monitoring</li>
                                    <li>Review Management</li>
                                    <li>Content Suppression</li>
                                    <li>Online Profile Optimization</li>
                                    <li>Crisis Management</li>
                                </ul>

                                <Link onClick={scrollToHome} to='/digital-marketing/orm'>More Info <i class="fa-solid fa-arrow-right arrow1"></i></Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default DMServiceOffer