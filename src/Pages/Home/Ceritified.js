import React from 'react'
import amazon from '../../Images/amazonCeritified.png'
import flipkart from '../../Images/flipkartCeritified.png'
import google from '../../Images/googleCeritified.webp'

function Ceritified() {
    return (
        <>
            <div className="container-fluid core-values-bg">
                <div className="container">
                    <div className="row">
                        <div className="col certified">
                            <h1>We are <span>Ceritified with</span></h1>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-around text-center">
                        <div className="col-md-4 col-sm-4 col-6 mb-3">
                            <div className=''>
                                <img src={amazon} alt="" width={160} loading='lazy' />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-6 mb-3">
                            <div className=''>
                                <img src={flipkart} alt="" width={160} loading='lazy' />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-6 mb-3">
                            <div className=''>
                                <img src={google} alt="" width={160} loading='lazy' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Ceritified