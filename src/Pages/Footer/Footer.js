import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container-fluid footer-bg">
                <div className="container-xl">
                    <div className="row border-bottom pb-3">
                        <div className="col-lg-4">
                            <div className='footer-head'>
                                <h1>Address</h1>
                            </div>
                            <div className="footer-list">
                                <p><i class="fa-solid fa-location-dot"></i> Bestech Business Tower
                                    Office No: 412 Tower-A, 4th Floor, Sahibzada Ajit Singh Nagar, Punjab 160066.</p>
                                <p><i class="fa-solid fa-location-dot"></i> Bestech Business Tower
                                    Office No: 412 Tower-A, 4th Floor, Sahibzada Ajit Singh Nagar, Punjab 160066.</p>
                                 
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="border-right">
                                <div className='footer-head'>
                                    <h1>Quick Links</h1>
                                </div>
                                <div className="footer-list">
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Home</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Career</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Our Team</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Blog</p></Link>
                                    <Link><p> <i class="fa-solid fa-caret-right footer-arrow"></i>Privacy & Policy</p></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3">
                            <div className="border-right">
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
                        <div className="col-lg-3">
                            <div className='footer-head'>
                                <h1>Contact Us</h1>
                            </div>
                            <div className="footer-list">
                                <Link><p> <i class="fa-solid fa-phone footer-social-icon"></i> +91 8427682603</p></Link>
                                <Link><p> <i class="fa-brands fa-whatsapp footer-social-icon"></i> +91 8427682603</p></Link>
                                <Link><p className='d-flex align-items-center'> <i class="fa-regular fa-envelope  footer-social-icon"></i> info@webtechsolutionsservice.com</p></Link>
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