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
                                    <Link onClick={scrollToHome} to='/career'><p>Career</p></Link>
                                    <Link onClick={scrollToHome} to='/our-team'><p> Our Team</p></Link>
                                    <Link onClick={scrollToHome} to='/blogs'><p>Blog</p></Link>
                                    <Link onClick={scrollToHome} to='/privacy-policy'><p>Privacy & Policy</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-md-6 mb-4">
                            <div className="border-right-footer">
                                <div className='footer-head'>
                                    <h1>Services</h1>
                                </div>
                                <div className="footer-list">
                                    <Link onClick={scrollToHome} to='/digital-marketing'><p> Digital Marketing</p></Link>
                                    <Link onClick={scrollToHome} to="/web-development"><p>Web Development</p></Link>
                                    <Link onClick={scrollToHome} to="/app-development"><p>App Development</p></Link>
                                    <Link onClick={scrollToHome} to='/graphic-designing'><p> Graphic Designing</p></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-6 col-md-6 mb-4">
                            <div className='footer-head'>
                                <h1>Contact Us</h1>
                            </div>
                            <div className="footer-list footer-list-padding">
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa-solid fa-location-dot footer-social-icon" style={{ color: "#fff" }}></i>
                                    </div>
                                    <div className="col-11">
                                        <p> Bestech Business Tower
                                            Office No: 412 Tower-A, 4th Floor, Sahibzada Ajit Singh Nagar, Punjab 160066.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa-solid fa-phone footer-social-icon" style={{ color: "#fff" }}></i>
                                    </div>
                                    <div className="col-11">
                                        <Link to="tel:+91 8427682603"><p>  +91 8427682603</p></Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-1">
                                        <i className="fa-solid fa-envelope footer-social-icon" style={{ color: "#fff" }}></i>
                                    </div>
                                    <div className="col-11">
                                        <Link to="mailto:info@webtechsolutionsservie.com"><p>  info@webtechsolutionsservie.com</p></Link>
                                    </div>
                                </div>

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