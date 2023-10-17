import React from 'react'
import Reputation from '../../../../Images/ORM_ Monitoring.png' 
import Review from '../../../../Images/ORM_ Review.png' 
import Crisis from '../../../../Images/ORM_ Crisis.png' 
import Profile from '../../../../Images/ORM_ Online.png' 
import Suppression from '../../../../Images/ORM_ Suppression.png' 
import Reporting from '../../../../Images/ORM_ Analysis.png' 

function ORMServiceOffer() {


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
                                <p>ORM services are important for business in today’s digital world. These services are designed to monitor and enhance your online presence that reflects your business reputation. It is an online strategy to protect and build trust among the audience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='ormserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Reputation} alt="" loading='lazy' width={61} />
                                    </div>
                                </div>
                                <h2>Reputation Monitoring</h2>
                                <p>Reputation Monitoring needs to review brand value on a periodic basis so that it can work on improving them. It focuses on the management of product and service search engine results.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='ormserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Review} alt="" loading='lazy' width={60} />
                                    </div>
                                </div>
                                <h2>Review Management</h2>
                                <p>Monitoring online and social media reviews made by customers about their brand. Effective review management can show a dedication to customer satisfaction and assist develop trust with new consumers.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='ormserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Crisis} alt="" loading='lazy' width={59} />
                                    </div>
                                </div>
                                <h2>Crisis Management</h2>
                                <p>It is a strategy designed to focus on organisational deal with significant negative events, while maintaining brand continuity. Monitoring online conversion and dealing swiftly with negative reviews.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='ormserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Profile} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Online Profile Optimization</h2>
                                <p>Online Profile Optimization creates a positive and professional image for your business.  Optimising Profile protects online identity to monitor the online presence.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='ormserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Suppression} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Content Suppression</h2>
                                <p>It helps to push the negative feedback and reviews down on SERPs. By showcasing the expertise of business with creating article and blog post promotes the business.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='ormserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={Reporting} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Reporting and Analysis</h2>
                                <p>We provide detailed reports and analysis to the customer, so that they can monitor the progress of their campaigns. It include the complete performance of the services.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ORMServiceOffer