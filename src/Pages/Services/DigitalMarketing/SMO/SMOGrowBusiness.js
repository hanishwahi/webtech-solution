import React from 'react' 
import profilecreation from '../../../../Images/Profile creation.png'
import PromoteConversions from '../../../../Images/Promote Conversions.png'
import Amplification from '../../../../Images/Content Amplification.png'
import Measure from '../../../../Images/Performance Measure.png'
import Hashtag from '../../../../Images/Hashtag.png'
import Scheduled from '../../../../Images/Scheduled Posting.png'  
import promotion  from '../../../../Images/Promoting Your Services.png' 
import trafficc from '../../../../Images/Most inbound traffic.png' 
import leads from '../../../../Images/Leads.png' 
import awareness from '../../../../Images/Brand awareness.png' 
import csatis from '../../../../Images/Better Customer Satisfaction.png' 

function SMOGrowBusiness() {
    return (
        <>
            <div className="container-fluid seo-growbusiness">
                <div className="container-xl">
                    <div className="row growbusiness-text">
                        <h1>How Can We Help You Grow Your Business through SMO? </h1>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box  '>
                                <img src={awareness} alt="" width={55} />
                                <h2>Brand Awareness</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={trafficc} alt="" width={55} />
                                <h2>More inbound Traffic</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={promotion} alt="" width={55} />
                                <h2>Services Promotion</h2>
                            </div>
                        </div>
                         
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={csatis} alt="" width={55} />
                                <h2>Customer Satisfaction</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={leads} alt="" width={55} />
                                <h2>Higher Conversion Rates</h2>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>

            <div className="container-fluid  mb-5">
                <div className="container-xl">
                    <div className="row seo-work">
                        <h1>Our Smo Work Includes</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sunt fuga minima, expedita esse amet quam praesentium voluptatem quas inventore. Quibusdam tenetur corrupti ullam harum, pariatur quam obcaecati facilis maxime?</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={profilecreation} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Profile Creation & Optimization</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisi elit. Sint voluptatem eaque nulla saepe, ullam reiciendis ullam reiciendis ullam reiciendis. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={PromoteConversions} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Promote Conversions</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisi elit. Sint voluptatem eaque nulla saepe, ullam reiciendis ullam reiciendis ullam reiciendis. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Amplification} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Content Amplification</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisi elit. Sint voluptatem eaque nulla saepe, ullam reiciendis ullam reiciendis ullam reiciendis. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Measure} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Performance Measure</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisi elit. Sint voluptatem eaque nulla saepe, ullam reiciendis ullam reiciendis ullam reiciendis. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Scheduled} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Scheduled Posting</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisi elit. Sint voluptatem eaque nulla saepe, ullam reiciendis ullam reiciendis ullam reiciendis. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Hashtag} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Hashtag Strategy</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisi elit. Sint voluptatem eaque nulla saepe, ullam reiciendis ullam reiciendis ullam reiciendis. </p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default SMOGrowBusiness