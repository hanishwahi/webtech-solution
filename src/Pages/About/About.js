import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AboutUS from './AboutUS'
import CounterRecord from './CounterRecord'
import WhyChooseUs from './WhyChooseUs'
import Clients from '../Home/HomeClients'
import GetQuote from './GetQuote'


function About() {

  return (
    <>
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