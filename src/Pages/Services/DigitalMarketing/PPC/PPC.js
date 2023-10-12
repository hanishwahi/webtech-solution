import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SMOIMG from '../../../../Images/SmoMainImg.webp'
import PPCGrowBusiness from './PPCGrowBusiness'
import PPCServiceOffer from './PPCServiceOffer'

function PPC() {
  return (
    <>
      <Header />
      <div className="smo-main">
        <div className="smoimg-left">
          <img src={SMOIMG} alt="" loading='lazy' className='img-fluid' />
        </div>
        <div className="  web-development-inner smotext-right">
          <h1><span>Pay Per</span> Click</h1>
          <p>In the ever-expanding digital landscape, websites are multiplying rapidly. From small businesses to eCommerce giants, everyone is exploring online advertising possibilities to enhance conversions. However, this growth in marketing opportunities is accompanied by significant challenges.</p>
          <div className="why-choose-checkbox">
            <p>Key Challenges for Online Businesses:</p>
            <p><i className="fa-solid fa-check"></i> Intense Competition</p>
            <p><i className="fa-solid fa-check"></i> Ad Blockers</p>
            <p><i className="fa-solid fa-check"></i> Stringent Regulations</p>
            <p><i className="fa-solid fa-check"></i> Shifting Consumer Demands</p>
            <p><i className="fa-solid fa-check"></i> High Digital Ad Costs</p>
            <p><i className="fa-solid fa-check"></i> Evolving Market Standards</p>
            <p><i className="fa-solid fa-check"></i> Elusive Consumers</p>
          </div>
        </div>
      </div>
      <PPCServiceOffer />
      <PPCGrowBusiness />
      <Footer />

    </>
  )
}

export default PPC