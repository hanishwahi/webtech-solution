import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SMOIMG from '../../../../Images/SmoMainImg.webp'
import SMOServiceOffer from './SMOServiceOffer'
import SMOGrowBusiness from './SMOGrowBusiness'
import ContactForm from '../../../ContactForm/ContactForm'

function SMO() {
    return (
        <>
            <Header />

            <div className="smo-main">
                <div className="smoimg-left">
                    <img src={SMOIMG} alt="" loading='lazy' className='img-fluid' />
                </div>
                <div className="  web-development-inner smotext-right">
                    <h1><span>Social Media</span> Optimization</h1>
                    <p>Social media optimization (SMO) forms an essential pillar of contemporary digital marketing. Its core focus lies in enhancing your brand's online presence, fostering higher engagement, and elevating visibility across diverse social media platforms. SMO strategies are thoughtfully customized to harness the vast potential of social media by fine-tuning elements such as profiles, content, and interactions with your audience.</p>
                    <div className="why-choose-checkbox">
                        <p><i className="fa-solid fa-check"></i> SMOs play a pivotal role in modern digital marketing.</p>
                        <p><i className="fa-solid fa-check"></i> Its objective is to enhance brand online presence and engagement.</p>
                        <p><i className="fa-solid fa-check"></i> Specialized strategies optimize profiles, content, and interactions.</p>
                        <p><i className="fa-solid fa-check"></i> Within the rapidly evolving social media landscape, SMO is a necessity.</p>
                        <p><i className="fa-solid fa-check"></i> It surpasses mere presence, shaping a captivating online persona.</p>
                        <p><i className="fa-solid fa-check"></i> The ultimate aim is to establish connections with the target audience and fuel business growth.</p>
                    </div>

                </div>


            </div>
            <SMOServiceOffer />
            <SMOGrowBusiness />
            <ContactForm />
            <Footer />
        </>
    )
}

export default SMO