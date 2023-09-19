import React from 'react'
import Header from '../Header/Header'
import Slider from './Slider'
import HowWeWork from './HowWeWork'
import Industries from './Industries' 
import CallAction from './CallAction'
import Footer from '../Footer/Footer'
import Clients from './Clients'
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
     <Clients/>   
     <Footer/>
  
     </>
  )
}

export default Home