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
                                <p>Whether you're an enterprise client or a unicorn startup, our extensive range of app development services has you covered. Customised iOS & Android apps engineered to perfection. Tailored to your needs from scratch.Your vision, our expertise.</p>

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
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                </ul>

                                <Link onClick={scrollToHome} to='/digital-marketing/seo'>More Info <i class="fa-solid fa-arrow-right"></i></Link>

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
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                </ul>

                                <Link>More Info <i class="fa-solid fa-arrow-right"></i></Link>

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
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                </ul>

                                <Link>More Info <i class="fa-solid fa-arrow-right"></i></Link>

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
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                </ul>

                                <Link>More Info <i class="fa-solid fa-arrow-right"></i></Link>

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
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                </ul>

                                <Link>More Info <i class="fa-solid fa-arrow-right"></i></Link>

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
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                    <li>Local SEO</li>
                                </ul>

                                <Link>More Info <i class="fa-solid fa-arrow-right"></i></Link>

                            </div>
                        </div>
 
                    </div>
                </div>
            </div>

        </>
    )
}

export default DMServiceOffer