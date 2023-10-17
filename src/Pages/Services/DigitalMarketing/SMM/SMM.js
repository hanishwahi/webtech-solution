import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SMMIMG from '../../../../Images/SMMMainImg.webp'
import SMMServiceOffer from './SMMServiceOffer'
import SMMGrowBusiness from './SMMGrowBusiness'
import ContactForm from '../../../ContactForm/ContactForm'

function SMM() {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="container">
                    <div className="row smm-main">

                        <div className="col-lg-6 col-sm-8 col-md-8">
                            <div className="">
                                <img src={SMMIMG} alt="" loading='lazy' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="web-development-inner">
                                <h1><span>Social Media</span> Marketing</h1>
                                <p>Social media marketing means using platforms like Facebook, Twitter, and LinkedIn to boost your brand's visibility, engage with customers, and reach new ones. It's a powerful tool for businesses, big or small, to connect with potential customers who spend time online. <br /> <br />

                                    With a well-thought-out social media plan backed by data, you can achieve remarkable results. It can turn customers into loyal brand advocates, improve your website's search engine visibility, and drive more customers and revenue to your business.
                                </p><br />
                                <p>Here's what it does in simple terms:</p>
                                <div className="why-choose-checkbox">
                                    <p><i className="fa-solid fa-check"></i> It makes people notice your brand.</p>
                                    <p><i className="fa-solid fa-check"></i> It lets you talk to customers while they're online.</p>
                                    <p><i className="fa-solid fa-check"></i> It can turn customers into fans.</p>
                                    <p><i className="fa-solid fa-check"></i> It helps your website show up better on Google.</p>
                                    <p><i className="fa-solid fa-check"></i> It brings in more customers and money.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <SMMServiceOffer />
            <SMMGrowBusiness />
            <ContactForm />
            <Footer />
        </>
    )
}

export default SMM