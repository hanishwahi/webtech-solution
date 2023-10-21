import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import ORMImg from '../../../../Images/ORM-main-img.webp'
import ORMGrowBusiness from './ORMGrowBusiness'
import ORMServiceOffer from './ORMServiceOffer'

function ORMService() {
  return (
    <>
      <Header />

      <div className="container-fluid py-3 py-md-5">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-8"><img src={ORMImg} alt="" loading='lazy' className='img-fluid' /></div>
            <div className="col-lg-6">
              <div className="web-development-inner">
                <h1><span>Online Reputation</span> Marketing</h1>
                <p>ORM is about monitoring and improving business reputation. It is a strategy to build and maintain the trust that customers have in business. Some of the related challenges business facing are Negative feedback, illegal content on websites, and false information. To overcome these negative comments and reviews on the internet it is essential to build an online image. To achieve successful and positive results ORM plays an important role.
                  This includes integration of Owned, Paid, Earned, and Shared media to achieve positive brand image and repeated purchases by customers. Company-provided content such as employees´ and consumers´ narratives, UGCs, reviews, webinars and company´s very own content.
                </p>
                <div className="why-choose-checkbox">
                  <p>Monitoring, managing and measuring your online health.</p>
                  <p><i className="fa-solid fa-check"></i> Collecting Online Buzz & Reviews About Your Brand on Every Major Review Site.</p>
                  <p><i className="fa-solid fa-check"></i> Post Your Customer Testimonials on Social media.</p>
                  <p><i className="fa-solid fa-check"></i> Stringent Regulations</p>
                  <p><i className="fa-solid fa-check"></i> How to Fight Back on Negative Posts and Comments for Reputation Management.</p>
                  <p><i className="fa-solid fa-check"></i> Keeping a track of your brand reputation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
      <ORMServiceOffer />
      <ORMGrowBusiness />
      <Footer />

    </>
  )
}

export default ORMService