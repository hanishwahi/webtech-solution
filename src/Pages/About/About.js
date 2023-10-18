import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AboutUS from './AboutUS'
import CounterRecord from './CounterRecord'
import WhyChooseUs from './WhyChooseUs'
import Clients from '../Home/HomeClients'
import GetQuote from './GetQuote'
import { Helmet } from 'react-helmet';

function About() {

  return (
    <>
    <Helmet>
          <title>WebTech Solutions - Leading IT Service Provider In India </title>
          <meta name="description" content="WebTech Solutions, the leading IT service provider in India. We specialise in digital marketing, mobile, and web application development, helping businesses thrive globally. " />
          {/* Open Graph (OG) tags */}
          <meta property="og:title" content="WebTech Solutions - Leading IT Service Provider In India 
" />
          <meta property="og:description" content="WebTech Solutions, the leading IT service provider in India. We specialise in digital marketing, mobile, and web application development, helping businesses thrive globally. " />
          <meta property="og:url" content="https://webtechsolutionsservice.com/about-us" />
          <meta property="og:type" content="website"/>
          <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp"/>
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="WebTech Solutions - Leading IT Service Provider In India 
" />
          <meta name="twitter:description" content="WebTech Solutions, the leading IT service provider in India. We specialise in digital marketing, mobile, and web application development, helping businesses thrive globally. " />
          <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp"/>
            {/* Canonical tag   */}

          <link rel="canonical" href="https://webtechsolutionsservice.com/about-us"/>
           
        </Helmet>
      <Header />
      <AboutUS />
      <WhyChooseUs />
      <CounterRecord />
      <GetQuote/>
      <Clients />
      <Footer />
    </>
  )
}

export default About