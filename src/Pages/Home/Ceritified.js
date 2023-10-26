import React from 'react'
import amazon from '../../Images/amazonCeritified.png'
import flipkart from '../../Images/flipkartCeritified.png'
import google from '../../Images/googleCeritified.webp'

function Ceritified() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col certified">
                            <h1>We are <span>Ceritified with</span></h1>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-around">
                        <div className="col-lg-3">
                            <div className='shadow border'>
                                <img src={amazon} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='shadow border'>
                                <img src={flipkart} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='shadow border'>
                                <img src={google} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='shadow border'>
                                <img src={google} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ceritified