import React from 'react'
import aboutimg from '../../Images/home-about-img.webp'

function AboutUS() {
    return (
        <>
            <div className="container-fluid aboutus-main">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-lg-7 aboutus-content">
                                <h1>About <span>Us</span> </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officia dolor nostrum consequatur, obcaecati officiis tempora voluptatem vitae illum, totam exercitationem voluptas. Quae, cupiditate voluptates reprehenderit officiis eius fugiat ratione omnis illum harum impedit minima eos non ducimus autem delectus itaque quam corporis quo porro repellendus fugit rerum ipsa. Sint aperiam esse excepturi laborum labore et praesentium quisquam laboriosam eveniet, recusandae eaque cupiditate quam alias maxime consectetur omnis sunt quos hic. Autem necessitatibus quos odio corrupti sequi magni earum, reiciendis labore eligendi eum voluptas accusantium nobis voluptatum natus voluptatibus! Numquam omnis expedita aut quas rem repellendus magnam veritatis voluptatibus nemo exercitationem velit totam quasi earum id, beatae officia veniam. Explicabo dignissimos provident inventore vero iste nobis ea natus odit nulla incidunt. </p>
                        </div>
                        <div className="col-lg-5">
                            <img src={aboutimg} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUS