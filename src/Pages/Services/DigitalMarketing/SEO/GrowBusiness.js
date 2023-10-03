import React from 'react'
import icon from '../../../../Images/Global SEO.png'

function GrowBusiness() {
    return (
        <>
            <div className="container-fluid seo-growbusiness">
                <div className="container-xl">
                    <div className="row growbusiness-text">
                        <h1>How Can We Help You Grow Your Business through SEO? </h1>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box'>
                                <img src={icon} alt="" width={50} />
                                <h2>seo</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box'>
                                <img src={icon} alt="" width={50} />
                                <h2>Ranking</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box'>
                                <img src={icon} alt="" width={50} />
                                <h2>Traffic</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box'>
                                <img src={icon} alt="" width={50} />
                                <h2>More Leads</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box'>
                                <img src={icon} alt="" width={50} />
                                <h2>Increase ROI</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GrowBusiness