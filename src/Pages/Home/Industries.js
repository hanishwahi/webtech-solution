import React from 'react'
import education from './../../Images/education.png'
import hospital from './../../Images/hospital.png'
import law from './../../Images/Law.png'
import realestate from './../../Images/real-estate.png'
import restaurant from './../../Images/restaurant.png'
import travel from './../../Images/Travel.png'
import finance from './../../Images/financial.png'
import retail from './../../Images/Retail.png'
import b2c from './../../Images/b2c.png'
import b2b from './../../Images/b2b.png'
import telecom from './../../Images/Telecom.png'
import immigration from './../../Images/Immigration.png'

function Industries() {

    return (
        <>
            <div className="container-fluid industries-main">
                <div className="container-xl">
                    <div className="row py-3">
                        <div className="col industries">
                            <h1>Industries <span>We Work For</span></h1>
                            <p>At our digital marketing agency, our expertise extends across a diverse spectrum of industries. We take pride in tailoring our digital strategies to suit the unique needs and challenges that each industry presents. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel">
                                <img  width={60} height={60} src={education} alt="" />
                                <h1>Education</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel">
                                <img  width={60} height={60} src={hospital} alt="" />
                                <h1>Hospital</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel">
                                <img  width={60} height={60} src={law} alt="" />
                                <h1>Law</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel3">
                                <img  width={60} height={60} src={realestate} alt="" />
                                <h1>Real Estate</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel">
                                <img  width={60} height={60} src={restaurant} alt="" />
                                <h1>Restaurant</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel">
                                <img  width={60} height={60} src={travel} alt="" />
                                <h1>Travel</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel">
                                <img  width={60} height={60} src={finance} alt="" />
                                <h1>Finance</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3'>
                            <div className="caraousel3">
                                <img  width={60} height={60} src={retail} alt="" />
                                <h1>Retail</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel2">
                                <img  width={60} height={60} src={b2c} alt="" />
                                <h1>Business to Customer</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel2">
                                <img  width={50} height={60} src={telecom} alt="" />
                                <h1>Telecom</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousel2">
                                <img  width={60} height={60} src={b2b} alt="" />
                                <h1>Business to Business</h1>
                            </div>
                        </div>
                        <div className='text-center col-md-3 col-sm-4 col-6 mb-3 border-right'>
                            <div className="caraousell">
                                <img  width={60} height={60} src={immigration} alt="" />
                                <h1>Immigration</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Industries