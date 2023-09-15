import React from 'react'
import education from './../../Images/education.png'
import hospital from './../../Images/hospital.png'
import law from './../../Images/Law.png'
import realestate from './../../Images/real-estate.png'
import restaurant from './../../Images/restaurant.png'
import travel from './../../Images/Travel.png'
import finance from './../../Images/financial.png'
import retail from './../../Images/Retail.png'

function Industries() {

    return (
        <>
            <div className="container-fluid industries-main">
                <div className="container-xl">
                    <div className="row py-3">
                        <div className="col industries">
                            <h1>Industries <span>We Work For</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel">
                                <img width={60} height={50} src={education} alt="" />
                                <h1>Education</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel">
                                <img width={60} height={50} src={hospital} alt="" />
                                <h1>Hospital</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel">
                                <img width={60} height={50} src={law} alt="" />
                                <h1>Law</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel3">
                                <img width={60} height={50} src={realestate} alt="" />
                                <h1>Real Estate</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel2">
                                <img width={60} height={50} src={restaurant} alt="" />
                                <h1>Restaurant</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel2">
                                <img width={60} height={50} src={travel} alt="" />
                                <h1>Travel</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel2">
                                <img width={60} height={50} src={finance} alt="" />
                                <h1>Finance</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousell">
                                <img width={60} height={50} src={retail} alt="" />
                                <h1>Retail</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Industries