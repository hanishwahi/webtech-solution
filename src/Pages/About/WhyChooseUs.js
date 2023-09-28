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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia dolor nostrum consequatur, obcaecati officiis tempora voluptatem vitae illum, totam exercitationem voluptas obcaecati officiis tempora voluptatem vitae illum, totam exercitationem voluptas exercitationem voluptas obcaecati officiis tempora voluptatem vitae illum, totam exercitationem voluptas.  </p>
                            </div>
                            <div className="why-choose-checkbox">
                                <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            

        </>
    )
}

export default WhyChooseUs