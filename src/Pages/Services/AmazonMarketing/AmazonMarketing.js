import React from 'react'
import amazon_img from '../../../Images/amazon_img.webp'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'  
import AmazonService from './AmazonService'  
import AmazonFaq from './AmazonFaq'  

function AmazonMarketing() {
 
  return (
    <>
      <Header />

      <div className="container-fluid web-development-main">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-8 col-md-6">
              <img src={amazon_img} alt=""  className='img-fluid p-2' loading='lazy'/>
            </div>
            <div className="col-lg-6">
              <div className='web-development-inner'>
                <h1><span>Amazon Marketing</span> Service</h1>
                <p>Amazon Marketing Services (AMS) offers effective tools to help vendors stand out against their competitors and drive traffic to product detail pages and branded pages. Our Amazon Marketing Services help you find, attract, and engage millions of Amazon customers to improve visibility & generate more sales. We are an Amazon marketing agency providing end-to-end Amazon SEO and Sponsored Ad listing solutions. <br /><br />
                  If you are a new seller and have not yet explored the Amazon placements, we will help you set things up. We will assist you in employing tactics and strategies to improve the search position of your marketplace listings and their conversions. Allow our team to give you precise guidance in exploring the advertising and selling opportunities offered by Amazon. Eventually, it would be best to have the edge over your competitors when selling on such a crowded platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <AmazonService/>
      <AmazonFaq/>
      <Footer />
    </>
  )
}

export default AmazonMarketing