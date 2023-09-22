import React from 'react'
import Header from '../Header/Header'
import Slider from './Slider'
import HowWeWork from './HowWeWork'
import Industries from './Industries' 
import CallAction from './CallAction'
import Footer from '../Footer/Footer'
import HomeClients from './HomeClients'
import HomeServices from './HomeServices'
// import Technologies from './Technologies'

function Home() {
  return (
     <>
     <Header/>
     <Slider/> 
     <HowWeWork/>
     <Industries/> 
     <HomeServices/>
     <CallAction/>
     {/* <Technologies/> */}
     <HomeClients/>   
     <Footer/>
  
     </>
  )
}

export default Home