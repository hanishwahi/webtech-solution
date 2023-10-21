import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import ContentIMG from '../../../../Images/Content Marketing.png'
import ContentMarketingBusiness from './ContentMarketingBusiness'
import ContentMarketingOffer from './ContentMarketingOffer'

function ContentMarketing() {
  return (
    <>
      <Header />
      <div className="container-fluid py-md-5 py-3">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-8"><img src={ContentIMG} alt="" loading='lazy' className='img-fluid' /></div>
            <div className="col-lg-6">
              <div className="  web-development-inner">
                <h1><span>Content Marketing</span> Service</h1>
                <p>Creating a strong online image is essential for businesses. Our content marketing service is customized to help your brand reach new heights by delivering high-quality, engaging, and relevant content that matches your target audience. It is the backbone of successful online marketing strategies. It goes beyond basic advertising and sales pitches, focusing on building trust, credibility, and lasting relationships with your customers. By constantly delivering valuable content, you not only attract visitors but also maintain their interest and loyalty.</p>
                <div className="why-choose-checkbox">
                  <p>What you get:</p>
                  <p><i className="fa-solid fa-check"></i> Quality content boosts visitor numbers and SEO rankings.</p>
                  <p><i className="fa-solid fa-check"></i> Regular posts make people trust your brand.</p>
                  <p><i className="fa-solid fa-check"></i> Getting people interested helps you sell more.</p>
                  <p><i className="fa-solid fa-check"></i> Content marketing helps you keep customers for a long time.</p>
                  <p><i className="fa-solid fa-check"></i> It's a smart, valuable investment for the future.</p>
                </div>
              </div></div>
          </div>
        </div>
      </div>

      <ContentMarketingOffer />
      <ContentMarketingBusiness />
      <Footer />

    </>
  )
}

export default ContentMarketing