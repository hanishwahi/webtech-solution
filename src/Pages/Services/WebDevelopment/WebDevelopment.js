import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import ServiceOffer from './ServiceOffer'
import Technologies from './Technologies'
import webdevelopmentImg from '../../../Images/web-develop-imng.webp'
import Faq from './FAQ'
import ContactForm from '../../ContactForm/ContactForm'
import { Helmet } from 'react-helmet'

function WebDevelopment() {
  return (
    <>

      <Helmet>
        <title>Best Web Development Company in Chandigarh | Top-Notch Web Solutions
        </title>
        <meta name="description" content="Webtechsolutionsservice.com is an award-winning, globally recognized Website Development Company in Chandigarh, India. We are offering cost effective custom web development,. Get started!" />

        {/* " Open Graph (OG) tags" */}
        <meta property="og:title" content="Best Web Development Company in Chandigarh | Top-Notch Web Solutions" />
        <meta property="og:description" content="Webtechsolutionsservice.com is an award-winning, globally recognized Website Development Company in Chandigarh, India. We are offering cost effective custom web development,. Get started!" />
        <meta property="og:url" content="https://webtechsolutionsservice.com/web-development" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* " Twitter Card tags" */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Web Development Company in Chandigarh | Top-Notch Web Solutions" />
        <meta name="twitter:description" content="Webtechsolutionsservice.com is an award-winning, globally recognized Website Development Company in Chandigarh, India. We are offering cost effective custom web development,. Get started!" />
        <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* " Canonical tag" */}
        <link rel="canonical" href="https://webtechsolutionsservice.com/web-development" />
      </Helmet>
      <Header />
      <div className="container-fluid web-development-main">
        <div className="container-xl">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-8 col-12 mb-3">
              <img src={webdevelopmentImg} alt="" loading='lazy' className='img-fluid' />
            </div>
            <div className="col-lg-6 web-development-inner mb-3">
              <h1><span>Website Development</span> Services</h1>
              <p>Utilizing our cutting-edge web development solutions, you may increase your online visibility and achieve your business goals. At our core, we understand that a website is more than just a digital presence—it's a powerful tool to captivate your audience and drive success. Our expert team combines stunning designs with seamless functionality to create websites that not only look impressive but also perform exceptionally well. Whether you need an informational website, a custom web solution, e-commerce capabilities, or even advanced portals and enterprise solutions, we've got you covered. We specialize in crafting cloud-based and SAAS solutions to take your digital game to the next level. Let us help you establish a strong online presence for your business and brand, ensuring you're well-equipped for success in the digital landscape.</p>
            </div>

          </div>
        </div>
      </div>
      <ServiceOffer />
      <Technologies />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  )
}

export default WebDevelopment