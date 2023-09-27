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
                            <div className='serviceOffer'>
                                <h1>Service <span>We Offer</span></h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis illo, error, beatae, quod ut minus molestias ea sint quae id quaerat quis et eligendi blanditiis placeat. Fuga esse ipsa ad. beatae, quod ut minus molestias ea sint quae id quaerat quis et eligendi blanditiis placeat. Fuga esse ipsa ad beatae, quod ut minus molestias ea sint quae id quaerat quis et eligendi blanditiis placeat. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={uiux} alt="" width={55} height={50}/>
                                <h2>UI/UX </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={frontend} alt="" width={55} height={50}/>
                                <h2>Front-End Development</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={backend} alt="" width={55} height={50}/>
                                <h2>Back-End Development</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={WordPress} alt="" width={55} height={50}/>
                                <h2>WordPress/ Shopify</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={Website} alt="" width={55} height={50}/>
                                <h2>Website Design</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={responsive} alt="" width={55} height={50}/>
                                <h2>Mobile-Responsive Design</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceOffer