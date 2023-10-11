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


function SEO() {
    return (
        <>
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