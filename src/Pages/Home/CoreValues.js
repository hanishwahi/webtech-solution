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
                                <h1>inovation</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quia alias ipsum, quod atque repellat neque blanditiis quidem obcaecati enim.</p>
                            </div>
                            <div className="core-icons">
                                <img src={innovation} alt="" width={100}/>
                            </div>
                            <div className="border-left-dotted">
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className="blue-bg">
                            </div>
                            <div className='shadow core-values-text'>
                                <h1>integrity</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quia alias ipsum, quod atque repellat neque blanditiis quidem obcaecati enim.</p>
                            </div>
                            <div className="core-icons">
                                <img src={integrity} alt="" width={100}/>
                            </div>
                            <div className="border-left-dotted">
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className="blue-bg">
                            </div>
                            <div className='shadow core-values-text'>
                                <h1>Customer Centricity</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quia alias ipsum, quod atque repellat neque blanditiis quidem obcaecati enim.</p>
                            </div>
                            <div className="core-icons">
                                <img src={customercent} alt="" width={100}/>
                            </div>
                            <div className="border-left-dotted">
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 ">
                            <div className="blue-bg">
                            </div>
                            <div className='shadow core-values-text'>
                                <h1>transparency</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quia alias ipsum, quod atque repellat neque blanditiis quidem obcaecati enim.</p>
                            </div>
                            <div className="core-icons">
                                <img src={transparency} alt="" width={100}/>
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