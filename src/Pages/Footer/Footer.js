import React from 'react'
import { Link } from 'react-router-dom'
import mainlogo from '../../Images/Webtech-logo.webp'

function Footer() {
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="container-fluid footer-bg">
                <div className="container-xl">
                    <div className="row border-bottom pb-3">
                        <div className="col-lg-3 col-sm-6 col-md-6 mb-4">
                            <div className='row'>
                                <div className="col">
                                    <img src={mainlogo} alt="" width={180} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-md-6 mb-4">
                            <div className="border-right-footer">
                                <div className='footer-head'>
                                    <h1>Quick Links</h1>
                                </div>
                                <div className="footer-list">
                                    {/* <Link><p> <i className="fa-solid fa-caret-right footer-arrow"></i>Home</p></Link> */}
                                    <Link><p><i className="fa-solid fa-caret-right footer-arrow"></i>Career</p></Link>
                                    <Link onClick={scrollToHome} to='/our-team'><p><i className="fa-solid fa-caret-right footer-arrow"></i>Our Team</p></Link>
                                    <Link onClick={scrollToHome} to='/blogs'><p><i className="fa-solid fa-caret-right footer-arrow"></i>Blog</p></Link>
                                    <Link onClick={scrollToHome} to='/privacy-policy'><p><i className="fa-solid fa-caret-right footer-arrow"></i>Privacy & Policy</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6 mb-4">
                            <div className="border-right-footer">
                                <div className='footer-head'>
                                    <h1>Services</h1>
                                </div>
                                <div className="footer-list">
                                    <Link><p> <i className="fa-solid fa-caret-right footer-arrow"></i>Digital Marketing</p></Link>
                                    <Link onClick={scrollToHome} to="/web-development"><p><i className="fa-solid fa-caret-right footer-arrow"></i>Web Development</p></Link>
                                    <Link onClick={scrollToHome} to="/app-development"><p><i className="fa-solid fa-caret-right footer-arrow"></i>App Development</p></Link>
                                    <Link><p> <i className="fa-solid fa-caret-right footer-arrow"></i>Graphic Designing</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6 mb-4">
                            <div className='footer-head'>
                                <h1>Contact Us</h1>
                            </div>
                            <div className="footer-list footer-list-padding">
                                <p><i className="fa-solid fa-location-dot footer-social-icon"></i> Bestech Business Tower
                                    Office No: 412 Tower-A, 4th Floor, Sahibzada Ajit Singh Nagar, Punjab 160066.</p>
                                <Link to="tel:+91 8427682603"><p> <i className="fa-solid fa-phone footer-social-icon"></i> +91 8427682603</p></Link>
                                <Link to="mailto:info@webtechsolutionsservie.com"><p> <i className="fa-solid fa-envelope footer-social-icon"></i> info@webtechsolutionsservie.com</p></Link>

                            </div>
                        </div>
                    </div>
                    <div className="row footer-list pt-3">
                        <p className='mb-0 text-center'>&#169; copyright 2023 Webtech Solutions Service</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer