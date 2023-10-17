import React from 'react'
import google from '../../../../Images/PPC_ Google.png'
import microsoft from '../../../../Images/PPC_ Microsoft.png'
import facebook from '../../../../Images/PPC_ Facebook.png'
import twitter from '../../../../Images/PPC_ Twitter.png'
import linkedin from '../../../../Images/PPC_ Linkedin.png'
import amazon from '../../../../Images/PPC_ Amazon.png'
 

function PPCServiceOffer() {


    return (
        <>
            <div className="container-fluid DM-box-bg">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <div className='DMserviceOffer'>
                                <h1>Service We Offer</h1>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className='DMserviceOffer'>
                                <p>If you're seeking an immediate boost for your campaigns and a swift return on investment, pay-per-click (PPC) advertising is a lucrative option. With PPC, you have full control over your paid search marketing efforts, allowing you to target your audience effectively and achieve positive business outcomes. It's a solution that addresses many of the challenges faced by online businesses and provides a means to navigate the intricate digital marketing landscape successfully.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='PPCserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={google} alt="" loading='lazy' width={61} />
                                    </div>
                                </div>
                                <h2>Google Ads</h2>
                                <p>Google Ads is a dominant PPC platform that showcases ads on Google Search, YouTube, & GDN, enhancing online visibility.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='PPCserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={microsoft} alt="" loading='lazy' width={60} />
                                    </div>
                                </div>
                                <h2>Microsoft Advertising (Bing Ads)</h2>
                                <p>PPC platform for ads on Bing & partner networks, a valuable alternative to Google Ads, great for specific demographics.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='PPCserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={facebook} alt="" loading='lazy' width={59} />
                                    </div>
                                </div>
                                <h2>Facebook Ads</h2>
                                <p>Facebook Ads, a potent PPC platform, reaches a broad, precise audience on the world's biggest social media site.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='PPCserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={twitter} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Twitter Ads</h2>
                                <p>Twitter's ad platform promotes content, reaching a global audience via sponsored tweets and trending topics.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='PPCserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={linkedin} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>LinkedIn Ads</h2>
                                <p>Ideal for B2B advertisers, provides precise targeting to reach professionals on the networking platform.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className='PPCserviceOffer-box'>
                                <div className="row text-center">
                                    <div className="col">
                                        <img src={amazon} alt="" loading='lazy' width={58} />
                                    </div>
                                </div>
                                <h2>Amazon Advertising</h2>
                                <p>A vital eCommerce platform for product promotion on Amazon, perfect for boosting sales and visibility.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default PPCServiceOffer