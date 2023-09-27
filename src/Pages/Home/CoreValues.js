import React from 'react'
import innovation from './../../Images/Innovation.png'
import integrity from './../../Images/Integrity.png'
import customercent from './../../Images/Customer-Centricity.png'
import transparency from './../../Images/transparency.png'
function CoreValues() {
    return (
        <>
            <div className="container-fluid core-values-bg">
                <div className="container-xl">
                    <div className="row pb-lg-5 py-3">
                        <div className="col industries">
                            <h1>Our <span>Core Values</span></h1>
                        </div>
                    </div>
                    <div className="row corevalue-border-bottom">
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className="blue-bg">
                            </div>
                            <div className='shadow core-values-text'>
                                <h1>innovation</h1>
                                <p>Innovation is at the heart of everything we do. We continually seek new ideas and creative solutions to drive progress and exceed expectations.</p>
                            </div>
                            <div className="core-icons">
                                <img src={innovation} alt="" width={80}/>
                            </div>
                            <div className="border-left-dotted">
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className="blue-bg">
                            </div>
                            <div className='shadow core-values-text'>
                                <h1>integrity</h1>
                                <p>We uphold unwavering honesty and transparency, ensuring your trust in our commitment to excellence.</p>
                            </div>
                            <div className="core-icons">
                                <img src={integrity} alt="" width={80}/>
                            </div>
                            <div className="border-left-dotted">
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className="blue-bg">
                            </div>
                            <div className='shadow core-values-text'>
                                <h1>Customer Centricity</h1>
                                <p>We prioritize your success, ensuring every digital marketing and website development solution is tailored to your unique needs and objectives.</p>
                            </div>
                            <div className="core-icons">
                                <img src={customercent} alt="" width={80}/>
                            </div>
                            <div className="border-left-dotted">
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className="blue-bg">
                            </div>
                            <div className='shadow core-values-text'>
                                <h1>transparency</h1>
                                <p>We believe in open communication and clear insights, ensuring our clients are informed every step of the way.</p>
                            </div>
                            <div className="core-icons">
                                <img src={transparency} alt="" width={80}/>
                            </div>
                            <div className="border-left-dotted">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoreValues