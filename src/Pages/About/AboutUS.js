import React from 'react'
import aboutusimg from '../../Images/aboutus-img.webp'
import clienticon1 from '../../Images/icon-Carparts.png'
import clienticon2 from '../../Images/icon-DOG.png'
import clienticon3 from '../../Images/icon-EBike.png'
import clienticon4 from '../../Images/icon-NU COSMETICS.png'
import clienticon5 from '../../Images/icon-ticketmaster99.png'

function AboutUS() {
    return (
        <>
            <div className="container-fluid aboutus-main">
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 aboutus-content">
                            <h1>About <span>Us</span> </h1>
                            <p>Welcome to Web Tech Solutions Service! A results-driven digital marketing agency in Mohali, India We're a dynamic blend of web design and development, app development, digital marketing, and graphic design. Our actionable strategies benefit startups, large enterprises, and family-run businesses. We craft solutions that resonate with your business, elevating your bottom line. Our dedicated specialists engage with each stage of your project, from research and planning to technical and creative execution. Join us in shaping success together</p>
                            <div className="why-choose-checkbox">
                                <p><i className="fa-solid fa-check"></i> Prioritize quality over profit, valuing our client relationships.</p>
                                <p><i className="fa-solid fa-check"></i> Engage in open strategy sessions to understand your growth needs.</p>
                                <p><i className="fa-solid fa-check"></i> Turn growth obstacles into exciting possibilities for your business.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col-12">
                            <img src={aboutusimg} alt="" loading='lazy' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  client-logo-slider-bg">
                <div className="container-xl">
                    <div className="row py-4 text-center my-3 my-md-5 align-items-center justify-content-between slide-track">
                        <div className="slider">
                            <div className="slide-track">
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon1} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon5} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon3} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon4} alt="" loading='lazy' width={130} />
                                </div>

                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon2} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon1} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon5} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon3} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon4} alt="" loading='lazy' width={130} />
                                </div>

                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon2} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon1} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon5} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon3} alt="" loading='lazy' width={130} />
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 slide">
                                    <img src={clienticon4} alt="" loading='lazy' width={130} />
                                </div>
                                
                            </div>
                        </div>


                    </div>
                </div>
            </div>

 
        </>
    )
}

export default AboutUS