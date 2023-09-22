import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer' 
import Technologies from '../WebDevelopment/Technologies'
import webdevelopmentImg from '../../../Images/home-service-img.webp' 
import AppServiceOffer from './AppServiceOffer' 

function AppDevelopment() {
  return (
    <>

      <Header />

      <div className="container-fluid web-development-main">
        <div className="container-xl">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-8 col-12 mb-3">
              <img src={webdevelopmentImg} alt="" className='img-fluid'/>
            </div>
            <div className="col-lg-8 web-development-inner mb-3">
              <h1><span>App Development</span> Services</h1>
              <p>Experience the power of our mobile app development service. Looking for services for developing custom mobile applications? To create your mobile solution, collaborate with the leading mobile app developers in the sector. We work with you to properly promote your company's online presence and win over the mobile-mad public. <br /><br />
              Collaboration with the right partner is essential. With the help of WebTech Solutions's custom mobile app development services, Realise your vision. We ensure you to develop a unique mobile application for your business that meets all of your needs.</p>
            </div>

          </div>
 
        </div>
      </div> 
      <AppServiceOffer/>
      <Technologies /> 
      <Footer />
    </>
  )
}

export default AppDevelopment