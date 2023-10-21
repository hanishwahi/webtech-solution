import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import PPCIMG from '../../../../Images/PPC-main-img.webp'
import PPCGrowBusiness from './PPCGrowBusiness'
import PPCServiceOffer from './PPCServiceOffer'
import { Helmet } from 'react-helmet'

function PPC() {
  return (
    <>
      <Helmet>

        <title>PPC Campaign Management Company in Chandigarh | Google Ad Campaigns Agency</title>
        <meta name="description" content="Drive targeted traffic and maximize your online visibility with our expertly crafted PPC campaigns. At WebTech Solutions, we leverage the power of pay-per-click advertising to help businesses achieve their marketing goals." />

        {/* Open Graph (OG) tags */}
        <meta property="og:title" content="PPC Campaign Management Company in Chandigarh | Google Ad Campaigns Agency" />
        <meta property="og:description" content="Drive targeted traffic and maximize your online visibility with our expertly crafted PPC campaigns. At WebTech Solutions, we leverage the power of pay-per-click advertising to help businesses achieve their marketing goals." />
        <meta property="og:url" content="https://webtechsolutionsservice.com/ppc-service" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PPC Campaign Management Company in Chandigarh | Google Ad Campaigns Agency
" />
        <meta name="twitter:description" content="Drive targeted traffic and maximize your online visibility with our expertly crafted PPC campaigns. At WebTech Solutions, we leverage the power of pay-per-click advertising to help businesses achieve their marketing goals.
" />
        <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

        {/* Canonical tag */}
        <link rel="canonical" href="https://webtechsolutionsservice.com/ppc-service" />
      </Helmet>



      <Header />

      <div className="container-fluid py-md-5 py-3">
        <div className="container-xl">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-8"><img src={PPCIMG} alt="" loading='lazy' className='img-fluid' /></div>
            <div className="col-lg-6">
              <div className="ppc-inner">
                <h1><span>Pay Per</span> Click</h1>
                <p>In the ever-expanding digital landscape, websites are multiplying rapidly. From small businesses to eCommerce giants, everyone is exploring online advertising possibilities to enhance conversions. However, this growth in marketing opportunities is accompanied by significant challenges.</p>
                <div className="ppc-checkbox">
                  <p>Key Challenges for Online Businesses:</p>
                  <ul>
                    <li><i className="fa-solid fa-check"></i> Intense Competition</li>
                    <li><i className="fa-solid fa-check"></i> Ad Blockers</li>
                    <li><i className="fa-solid fa-check"></i> Stringent Regulations</li>
                    <li><i className="fa-solid fa-check"></i> Shifting Consumer Demands</li>
                    <li><i className="fa-solid fa-check"></i> High Digital Ad Costs</li>
                    <li><i className="fa-solid fa-check"></i> Evolving Market Standards</li>
                    <li><i className="fa-solid fa-check"></i> Elusive Consumers</li>
                  </ul>
                </div>
              </div>
            </div>
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