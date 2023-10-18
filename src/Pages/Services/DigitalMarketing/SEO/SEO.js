import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SEOImg from '../../../../Images/SEOmainimg.webp'
import SeoServiceOffer from './SeoServiceOffer'
import GrowBusiness from './GrowBusiness'
import sales from '../../../../Images/Sales.webp'
import appearence from '../../../../Images/Apperance.webp'
import lg from '../../../../Images/LG.webp'
import ContactForm from '../../../ContactForm/ContactForm'
import { Helmet } from 'react-helmet'

function SEO() {
    return (
        <>
            <Helmet>
                <title>SEO Specialist | SEO Agency |  Best SEO Company in Chandigarh, India
                </title>
                <meta name="description" content="Enhance your website's visibility and outrank the competition with our comprehensive SEO strategies. We are specializes in optimising websites for search engines." />

                {/* Open Graph (OG) tags */}
                <meta property="og:title" content="SEO Specialist | SEO Agency |  Best SEO Company in Chandigarh, India" />
                <meta property="og:description" content="Enhance your website's visibility and outrank the competition with our comprehensive SEO strategies. We are specializes in optimising websites for search engines." />
                <meta property="og:url" content="https://webtechsolutionsservice.com/seo-service" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO Specialist | SEO Agency |  Best SEO Company in Chandigarh, India
" />
                <meta name="twitter:description" content="Enhance your website's visibility and outrank the competition with our comprehensive SEO strategies. We are specializes in optimising websites for search engines.
" />
                <meta name="twitter:image" content="https://webtechsolutionsservice.com/static/media/newlogo.e2c8970ce6ff827fea73.webp" />

                {/* Canonical tag */}
                <link rel="canonical" href="https://webtechsolutionsservice.com/seo-service" />
            </Helmet>
            <Header />
            <div className="container-fluid web-development-main">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-6 col-sm-7 col-12 mb-3">
                            <img src={SEOImg} alt="" loading='lazy' className='img-fluid' />
                        </div>
                        <div className="col-lg-6 web-development-inner mb-3">
                            <h1><span>Search Engine</span> Optimization</h1>
                            <p>SEO can seem complex, involving tasks like analyzing your business, building links, researching keywords, creating content, and structuring your site. That's where we come in. You might have a clear vision of your needs, but the path to achieving them remains unclear. Our SEO specialists frequently hear this from clients who reach out to WebTech Solutions Service. You're likely visiting us for one or more of the following reasons:</p>
                            <div className="why-choose-checkbox">
                                <p><i className="fa-solid fa-check"></i> Your website struggles to gain online visibility.</p>
                                <p><i className="fa-solid fa-check"></i> Recent declines in website traffic have left you puzzled.</p>
                                <p><i className="fa-solid fa-check"></i> A sudden drop in incoming calls and leads has raised concerns.</p>
                                <p><i className="fa-solid fa-check"></i> You're launching a new website and need a rapid boost in business.</p>
                            </div>
                            <p>Rest assured, you're in the hands of the right SEO company. WebTech serves hundreds of SEO clients, delivering solutions that adapt to Google's ever-changing algorithms.</p>
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 col-6">
                                    <img src={sales} alt="" className='img-fluid' />
                                </div>
                                <div className="col-lg-4 col-sm-4 col-6">
                                    <img src={appearence} alt="" className='img-fluid' />
                                </div>
                                <div className="col-lg-4 col-sm-4 col-6">
                                    <img src={lg} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <SeoServiceOffer />
            <GrowBusiness />
            <ContactForm />
            <Footer />
        </>
    )
}

export default SEO