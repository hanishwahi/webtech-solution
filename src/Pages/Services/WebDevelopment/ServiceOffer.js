import React from 'react'
import uiux from '../../../Images/UI UX.png'
import frontend from '../../../Images/front-end.png'
import backend from '../../../Images/backend.png'
import WordPress from '../../../Images/wordpress.png'
import Website from '../../../Images/web-design.png'
import responsive from '../../../Images/responsive.png'

function ServiceOffer() {
    return (
        <>
            <div className="container-fluid service-box-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <div className='webserviceOffer'>
                                <h1>Service <span>We Offer</span></h1>
                                <p>Our services revolve around elevating user satisfaction through enhanced website usability. We handle end-to-end development, specializing in crafting captivating websites from the ground up. This includes creating visually appealing layouts and intuitive user interfaces and ensuring mobile responsiveness. Explore our comprehensive services below to unlock the full potential of your online presence.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='webserviceOffer-box'>
                                <img src={uiux} alt=""  loading='lazy' width={55} height={50}/>
                                <h2>UI/UX Design</h2>
                                <p>Focusing on enhancing user satisfaction by improving the usability of a website.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='webserviceOffer-box'>
                                <img src={frontend} alt=""  loading='lazy' width={55} height={50}/>
                                <h2>Front-End Development</h2>
                                <p>Building the website using HTML, CSS, and JavaScript to create interactive interfaces.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='webserviceOffer-box'>
                                <img src={backend} alt=""  loading='lazy' width={55} height={50}/>
                                <h2>Back-End Development</h2>
                                <p>Developing the website including database management, server logic, and architecture.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='webserviceOffer-box'>
                                <img src={WordPress} alt=""  loading='lazy' width={55} height={50}/>
                                <h2>WordPress/ Shopify</h2>
                                <p>We specialize in creating stunning WordPress websites from scratch.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='webserviceOffer-box'>
                                <img src={Website} alt=""  loading='lazy' width={55} height={50}/>
                                <h2>Website Design</h2>
                                <p>Creating the visual layout, user interface, and overall look and feel of a website.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='webserviceOffer-box'>
                                <img src={responsive} alt=""  loading='lazy' width={55} height={50}/>
                                <h2>Mobile-Responsive </h2>
                                <p>Ensuring that websites display correctly on smartphones and tablets.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceOffer