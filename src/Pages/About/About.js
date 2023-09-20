import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AboutUS from './AboutUS'
import CounterRecord from './CounterRecord'
import WhyChooseUs from './WhyChooseUs'
import Clients from'../Home/Clients'
 
 
function About() {
  
  return (
     <> 
     <Header/> 
     <AboutUS/> 
     <WhyChooseUs/>
     <CounterRecord/> 
     <Clients/>
     <Footer/>
     </>
  )
}

export default About