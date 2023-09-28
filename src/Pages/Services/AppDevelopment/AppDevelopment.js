import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'  
import appdevelopmentImg from '../../../Images/app-devp-img.webp' 
import AppServiceOffer from './AppServiceOffer' 
import ContactForm from '../../ContactForm/ContactForm'
import AppTechnologies from './AppTechnologies'

function AppDevelopment() {
  return (
    <>

      <Header />

      <div className="container-fluid web-development-main">
        <div className="container-xl">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-8 col-12 mb-3">
              <img src={appdevelopmentImg} alt="" className='img-fluid'/>
            </div>
            <div className="col-lg-5 web-development-inner mb-3">
              <h1><span>App Development</span> Services</h1>
              <p>Experience the power of our mobile app development service. Looking for services for developing custom mobile applications? To create your mobile solution, collaborate with the leading mobile app developers in the sector. We work with you to properly promote your company's online presence and win over the mobile-mad public. <br /><br />
              Collaboration with the right partner is essential. With the help of WebTech Solutions's custom mobile app development services, Realise your vision. We ensure you to develop a unique mobile application for your business that meets all of your needs.</p>
            </div>

          </div>
 
        </div>
      </div> 
      <AppServiceOffer/> 
      <AppTechnologies/>
      <ContactForm/>
      <Footer />
    </>
  )
}

export default AppDevelopment