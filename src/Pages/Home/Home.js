import React from 'react'
import Header from '../Header/Header'
import Slider from './Slider'
import HowWeWork from './HowWeWork'
import Industries from './Industries'
import Services from './Services'
import CallAction from './CallAction'
import Footer from '../Footer/Footer'
import Clients from './Clients'
// import Technologies from './Technologies'

function Home() {
  return (
     <>
     <Header/>
     <Slider/> 
     <HowWeWork/>
     <Industries/>
     <Services/>
     <CallAction/>
     {/* <Technologies/> */}
     <Clients/>
     <Footer/>
  
     </>
  )
}

export default Home