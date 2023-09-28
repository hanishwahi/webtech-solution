import React from 'react' 
import aboutusimg from '../../Images/aboutus-img.webp'
import clienticon1 from '../../Images/icon-Carparts.png'
import clienticon2 from '../../Images/icon-DOG.png'
import clienticon3 from '../../Images/icon-EBike.png'
import clienticon4 from '../../Images/icon-NU COSMETICS.png'
import clienticon5 from '../../Images/icon-ticketmaster99.png'

function AboutUS() {
    return (
        <>
            <div className="container-fluid aboutus-main">
                <div className="container-xl">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 aboutus-content">
                            <h1>About <span>Us</span> </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia dolor nostrum consequatur, obcaecati officiis tempora voluptatem vitae illum, totam exercitationem voluptas. Quae, cupiditate voluptates reprehenderit officiis eius fugiat ratione omnis illum harum impedit minima eos non ducimus autem delectus itaque quam corporis quo porro repellendus fugit rerum ipsa. Sint aperiam esse excepturi laborum labore et praesentium quisquam laboriosam eveniet.</p>
                            <div className="why-choose-checkbox">
                                <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <p><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col-12">
                            <img src={aboutusimg} alt=""  loading='lazy' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  client-logo-slider-bg">
                <div className="container-xl">
                    <div className="row py-4 text-center my-3 my-md-5 align-items-center justify-content-between">
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clienticon1} alt=""  loading='lazy' width={130} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clienticon5} alt=""  loading='lazy' width={130} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clienticon3} alt=""  loading='lazy' width={130} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clienticon4} alt=""  loading='lazy' width={130} />
                        </div>
                      
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clienticon2} alt=""  loading='lazy' width={130} />
                        </div>
                         
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUS