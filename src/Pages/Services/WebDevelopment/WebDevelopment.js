import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import ServiceOffer from './ServiceOffer'
import Technologies from './Technologies'
import webdevelopmentImg from '../../../Images/aboutus-img.webp'
import Faq from './FAQ'

function WebDevelopment() {
  return (
    <>

      <Header />

      <div className="container-fluid web-development-main">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-4">
              <img src={webdevelopmentImg} alt="" className='container-fluid'/>
            </div>
            <div className="col-lg-8 web-development-inner">
              <h1><span>Website Development</span> Services</h1>
              <p>Unleash the power of your online presence with our cutting-edge web development solutions. From stunning designs to seamless functionality, we create websites that captivate your audience and drive success. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online.</p>
            </div>

          </div>
        </div>
      </div>
      <ServiceOffer />
      <Technologies />
      <Faq/>
      <Footer />
    </>
  )
}

export default WebDevelopment