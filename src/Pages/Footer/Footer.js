import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container-fluid footer-bg">
                <div className="container-xl">
                    <div className="row border-bottom pb-3">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className='footer-head'>
                                <h1>WebTech Solutions</h1>
                            </div>
                            <div className="footer-list">
                                <p>We specialize in creating custom websites that are fast, secure, and optimized for SEO. Our team of experienced developers can also help you with digital marketing services such as SEO, social media management and more.</p> 
                                 
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-md-6">
                            <div className="border-right-footer">
                                <div className='footer-head'>
                                    <h1>Quick Links</h1>
                                </div>
                                <div className="footer-list">
                                    {/* <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Home</p></Link> */}
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Career</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Our Team</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Blog</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Privacy & Policy</p></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-46">
                            <div className="border-right-footer">
                                <div className='footer-head'>
                                    <h1>Services</h1>
                                </div>
                                <div className="footer-list">
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Digital Marketing</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Web Development</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>App Development</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Graphic Designing</p></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className='footer-head'>
                                <h1>Contact Us</h1>
                            </div>
                            <div className="footer-list">
                                <p><i class="fa-solid fa-location-dot"></i> Bestech Business Tower
                                    Office No: 412 Tower-A, 4th Floor, Sahibzada Ajit Singh Nagar, Punjab 160066.</p>
                                <Link to="tel:+91 8427682603"><p> <i class="fa-solid fa-phone footer-social-icon"></i> +91 8427682603</p></Link>
                                <Link to="https://wa.me/+918427682603"><p> <i class="fa-brands fa-whatsapp footer-social-icon"></i> +91 8427682603</p></Link>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row footer-list text-center pt-3">
                        <p className='mb-0'>&#169; copyright 2023 webtech solutions service</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer