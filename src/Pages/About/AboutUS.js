import React from 'react'
 import clientlogos from '../../Images/nucosmetic.webp'
import aboutusimg from '../../Images/aboutus-img.webp'

function AboutUS() {
  

    return (
        <>
            <div className="container-fluid aboutus-main">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 aboutus-content">
                            <h1>About <span>Us</span> </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia dolor nostrum consequatur, obcaecati officiis tempora voluptatem vitae illum, totam exercitationem voluptas. Quae, cupiditate voluptates reprehenderit officiis eius fugiat ratione omnis illum harum impedit minima eos non ducimus autem delectus itaque quam corporis quo porro repellendus fugit rerum ipsa. Sint aperiam esse excepturi laborum labore et praesentium quisquam laboriosam eveniet, recusandae eaque cupiditate quam alias maxime consectetur omnis sunt quos hic. Autem necessitatibus quos odio corrupti sequi magni earum, reiciendis labore eligendi eum voluptas accusantium nobis voluptatum natus voluptatibus! Numquam omnis expedita aut quas rem repellendus magnam veritatis voluptatibus nemo exercitationem velit totam quasi earum id, beatae officia veniam. Explicabo dignissimos provident inventore vero iste nobis ea natus odit nulla incidunt.</p>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-8 col-8">
                            <img src={aboutusimg} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  client-logo-slider-bg">
                <div className="container-xl">
                    <div className="row py-4 text-center my-3 my-md-5">
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clientlogos} alt="" width={90} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clientlogos} alt="" width={90} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clientlogos} alt="" width={90} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clientlogos} alt="" width={90} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clientlogos} alt="" width={90} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-4 mb-3 mb-lg-0 btnhover">
                            <img src={clientlogos} alt="" width={90} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUS