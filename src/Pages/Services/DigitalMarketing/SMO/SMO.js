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
                            <p>Unleash the power of your online presence with our cutting-edge web development solutions. From stunning designs to seamless functionality, we create websites that captivate your audience and drive success. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online. Elevate your digital game with our expert team. with a great user Interface with the best design for your own website. We help you establish your business, brand and other things online.</p>

                        </div>

                    
            </div>
            <SMOServiceOffer/>
            <SMOGrowBusiness/>
            <ContactForm/>
            <Footer />
        </>
    )
}

export default SMO