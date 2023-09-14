import React from 'react'
import icon1 from './../../Images/Icon1.png'
import icon2 from './../../Images/Icon2.png'
import icon3 from './../../Images/Icon3.png'
import one from './../../Images/01.png'
import two from './../../Images/02.png'
import three from './../../Images/03.png'

function HowWeWork() {
    return (
        <>
            <div className="container-fluid how-we-work-main">
                <div className="container-xl">
                    <div className="row">
                        <div className="col how-we-work">
                            <h1>How <span>We Work</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque nesciunt  <br />pariatur sapiente itaque illum architecto et voluptatem quibusdam. </p>
                        </div>
                    </div>
                    <div className="row justify-content-between py-3">
                        <div className="col-lg-4 col-sm-6 ">
                            <div>
                                <div className='py-4'> <img width={60} height={50} src={one} alt="" /></div>
                                <div className='d-flex shadow how-we-work-inner'>
                                    <div className='col-3 col-sm-4 col-md-3 how-we-work-icon'>
                                        <img  width={50} src={icon1} alt="" className='m-3' />
                                    </div>

                                    <div className='col-9 col-sm-8 col-md-9'><h1>Understanding <br /> Client Needs</h1></div>
                                </div>
                                <div className='how-we-work-inner'>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur saepe mollitia, dolores blanditiis modi asperiores.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <div className='py-4'> <img width={60} height={50} src={two} alt="" /></div>
                                <div className='d-flex shadow how-we-work-inner'>
                                    <div className='col-3 col-sm-4 col-md-3 how-we-work-icon'>
                                        <img  width={50} src={icon2} alt="" className='m-3' />
                                    </div>

                                    <div className='col-9 col-sm-8 col-md-9'><h1>Planning & <br /> Strategy</h1></div>
                                </div>
                                <div className='row how-we-work-inner'>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur saepe mollitia, dolores blanditiis modi asperiores.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div>
                                <div className='py-4'> <img width={60} height={50} src={three} alt="" /></div>
                                <div className='d-flex shadow how-we-work-inner'>
                                    <div className='col-3 col-sm-4 col-md-3 how-we-work-icon'>
                                        <img  width={50} src={icon3} alt="" className='m-3' />
                                    </div>

                                    <div className='col-9 col-sm-8 col-md-9'><h1>Client <br /> Satisfaction</h1></div>
                                </div>
                                <div className='row how-we-work-inner'>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur saepe mollitia, dolores blanditiis modi asperiores.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowWeWork