import React from 'react'
import android from './../../../Images/android.png'
import ios from './../../../Images/IOS.png'

function ServiceOffer() {
    return (
        <>
            <div className="container-fluid service-box-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <div className='serviceOffer'>
                                <h1>Service <span>We Offer</span></h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis illo, error, beatae, quod ut minus molestias ea sint quae id quaerat quis et eligendi blanditiis placeat. Fuga esse ipsa ad. beatae, quod ut minus molestias ea sint quae id quaerat quis et eligendi blanditiis placeat. Fuga esse ipsa ad beatae, quod ut minus molestias ea sint quae id quaerat quis et eligendi blanditiis placeat. </p> <br />
                                <ul>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> 
                                </ul>
                                 
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={android} alt="" />
                                <h2>Android App Development</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> <br /> 
                                <ul>
                                    <li>Lorem ipsum dolor sit.</li> 
                                    <li>Lorem ipsum dolor sit.</li> 
                                    <li>Lorem ipsum dolor sit.</li> 
                                    <li>Lorem ipsum dolor sit.</li> 
                                </ul>
                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className='serviceOffer-box'>
                                <img src={ios} alt="" />
                                <h2>IOS App Development</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> <br /> 
                                <ul>
                                    <li>Lorem ipsum dolor sit.</li> 
                                    <li>Lorem ipsum dolor sit.</li> 
                                    <li>Lorem ipsum dolor sit.</li> 
                                    <li>Lorem ipsum dolor sit.</li> 
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceOffer