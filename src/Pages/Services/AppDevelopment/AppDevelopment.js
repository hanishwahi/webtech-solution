import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import appdevelopmentImg from '../../../Images/app-devp-img.webp'
import AppServiceOffer from './AppServiceOffer'
import ContactForm from '../../ContactForm/ContactForm'
import AppTechnologies from './AppTechnologies'
import { Helmet } from 'react-helmet'

function AppDevelopment() {
  return (
    <>
      <Helmet>
        <title>Hire the best Mobile App Developers | App Development Company in Chandigarh, INDIA
        </title>
        <meta name="description" content="Webtech Solutions Service build a mobile app that takes your business to the next level. Now generate skyrocketed revenues with mobile app services. Get Started!" />

        Open Graph (OG) tags
        <meta property="og:title" content="Hire the best Mobile App Developers | App Development Company in Chandigarh, INDIA" />
        <meta property="og:description" content="Webtech Solutions Service build a mobile app that takes your business to the next level. Now generate skyrocketed revenues with mobile app services. Get Started!" />
        <meta property="og:url" content="https://webtechsolutionsservice.com/app-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        Twitter Card tags
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire the best Mobile App Developers | App Development Company in Chandigarh, INDIA" />
        <meta name="twitter:description" content="Webtech Solutions Service build a mobile app that takes your business to the next level. Now generate skyrocketed revenues with mobile app services. Get Started!" />
        <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        Canonical tag
        <link rel="canonical" href="https://webtechsolutionsservice.com/app-development" />
      </Helmet>
      <Header />

      <div className="container-fluid web-development-main">
        <div className="container-xl">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-8 col-12 mb-3">
              <img src={appdevelopmentImg} alt="" loading='lazy' className='img-fluid' />
            </div>
            <div className="col-lg-5 web-development-inner mb-3">
              <h1><span>App Development</span> Services</h1>
              <p>Experience the power of our mobile app development service. Looking for services for developing custom mobile applications? To create your mobile solution, collaborate with the leading mobile app developers in the sector. We work with you to properly promote your company's online presence and win over the mobile-mad public. <br /><br />
                Collaboration with the right partner is essential. With the help of WebTech Solutions's custom mobile app development services, Realise your vision. We ensure you to develop a unique mobile application for your business that meets all of your needs.</p>
            </div>

          </div>

        </div>
      </div>
      <AppServiceOffer />
      <AppTechnologies />
      <ContactForm />
      <Footer />
    </>
  )
}

export default AppDevelopment