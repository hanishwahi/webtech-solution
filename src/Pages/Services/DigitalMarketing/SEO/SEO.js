import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SEOImg from '../../../../Images/SEOmainimg.webp'
import SeoServiceOffer from './SeoServiceOffer'
import GrowBusiness from './GrowBusiness'


function SEO() {
    return (
        <>
            <Header />
            <div className="container-fluid web-development-main">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-8 col-12 mb-3">
                            <img src={SEOImg} alt="" loading='lazy' className='img-fluid' />
                        </div>
                        <div className="col-lg-6 web-development-inner mb-3">
                            <h1><span>Search Engine</span> Optimization</h1>
                            <p>Unleash the power of your online presence with our cutting-edge web development solutions. From stunning designs to seamless functionality, we create websites that captivate your audience and drive success. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online.</p>
                        </div>

                    </div>
                </div>
            </div>
            <SeoServiceOffer/>
            <GrowBusiness/>
            <Footer />
        </>
    )
}

export default SEO