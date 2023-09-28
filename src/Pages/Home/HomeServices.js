import React from 'react'
import { Link } from 'react-router-dom'
 import homeserviceImg from './../../Images/home-service-img.webp'
import digitalMarketing from './../../Images/Digital Marketing.png'
import webdevelopment from './../../Images/Web Development.png'
import appdevelopment from './../../Images/App Development.png'
import graphicdesigning from './../../Images/Graphic Designing.png'

function HomeServices() {
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="container-fluid home-services-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className='home-services-main px-3'>
                                <div className="row mb-3">
                                    <div className="col-lg-12 col-md-6 col-sm-6 align-self-center">
                                        <div className="row home-services">
                                            <h1>Our <span>Services</span> </h1>
                                            <p>Discover a world of possibilities with our  comprehensive services. We offer a dynamic range of solutions tailored to propel your brand forward. From website design and development that captivates your audience to data-driven digital marketing strategies that boost your online presence, we've got you covered. </p>
                                        </div>
                                        {/* <div className='home-services-button'>
                                            <Link>View All</Link>
                                        </div> */}
                                    </div>
 
                                    <div className="col-lg-12 col-md-6 col-sm-6">
                                        <div className="row justify-content-center">
                                            <div className="col-8 col-md-8 col-lg-11 col-sm-11">
                                                <img src={homeserviceImg} alt="" className='img-fluid' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <div className="">
                                            <div className='home-service-box'>
                                                <img width={50} src={digitalMarketing} alt="" className='pb-4' />
                                                <h1>Digital Marketing</h1>
                                                <p> From SEO to social media and PPC we'll help you reach your target audience and achieve remarkable results.</p>
                                                <Link onClick={scrollToHome} to='/digital-marketing'>Explore More <i className="fa-solid fa-angles-right arrow1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                                        <div className="">
                                            <div className='home-service-box'>
                                                <img width={50} src={webdevelopment} alt="" className='pb-4' />
                                                <h1>Web Development</h1>
                                                <p>We bring your digital vision to life with sleek designs and seamless functionality.</p>
                                                <Link onClick={scrollToHome} to='/web-development'>Explore More <i className="fa-solid fa-angles-right arrow1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-2 mb-lg-0">
                                        <div className="">
                                            <div className='home-service-box'>
                                                <img width={40} src={appdevelopment} alt="" className='pb-4' />
                                                <h1>App Development</h1>
                                                <p>From concept to launch, we transform ideas into powerful, user-friendly mobile and web applications.</p>
                                                <Link onClick={scrollToHome} to='/app-development'>Explore More <i className="fa-solid fa-angles-right arrow1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-2 mb-lg-0">
                                        <div className="">
                                            <div className='home-service-box'>
                                                <img width={50} src={graphicdesigning} alt="" className='pb-4' />
                                                <h1>Graphic Designing</h1>
                                                <p>From captivating logos to stunning visuals, we transform your ideas into compelling visual stories.</p>
                                                <Link onClick={scrollToHome} to='/graphic-designing'>Explore More <i className="fa-solid fa-angles-right arrow1"></i></Link>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeServices