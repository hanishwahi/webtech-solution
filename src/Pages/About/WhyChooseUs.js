import React from 'react'
import WhyChooseUsimg from '../../Images/whyChooseUs-img.webp'


function WhyChooseUs() {
    return (
        <>

            <div className="container-fluid ">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-lg-between justify-content-center">
                        <div className="col-lg-5 col-md-6 col-sm-6 col-8">
                            <img src={WhyChooseUsimg} alt="" loading='lazy' className='img-fluid' />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 why-choose py-3">
                            <div>
                                <h1>Why <span>Choose Us?</span> </h1>
                                <p>Customers seek innovation and excellence in their chosen services and products. Our unwavering focus, practical strategies, and proven track record make us the top choice for digital marketing services in the USA, Dubai, Australia, and various other countries.</p>
                            </div>
                            <div className="why-choose-checkbox">
                                <p><i className="fa-solid fa-check"></i> One-stop solution for your business</p>
                                <p><i className="fa-solid fa-check"></i> Expertise in multiple domains</p>
                                <p><i className="fa-solid fa-check"></i> Fast and efficient project execution</p>
                                <p><i className="fa-solid fa-check"></i> Tailored solutions to meet your specific needs</p>
                                <p><i className="fa-solid fa-check"></i> Creative and innovative designs</p>
                                <p><i className="fa-solid fa-check"></i> Proven track record of success</p>
                                <p><i className="fa-solid fa-check"></i> Competitive Pricing</p>
                                <p><i className="fa-solid fa-check"></i> Dedicated customer support</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            

        </>
    )
}

export default WhyChooseUs