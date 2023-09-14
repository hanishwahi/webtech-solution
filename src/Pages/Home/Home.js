import React from 'react'
import Header from '../Header/Header'
import Slider from './Slider'
import HowWeWork from './HowWeWork'
import Industries from './Industries'
import Services from './Services'

function Home() {
  return (
     <>
     <Header/>
     <Slider/> 
     <HowWeWork/>
     <Industries/>
     <Services/>
     </>
  )
}

export default Home