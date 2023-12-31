import React from "react";
import { Link } from 'react-router-dom'
import MainNewlogo from '../../Images/Webtech-logo.webp'

function Navbar() {

    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="container-fluid sticky-top bg-white py-lg-3 py-2 border-bottom">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-4 text-start px-0 align-self-center">
                            <Link onClick={scrollToHome} to='/'>
                                <img width="80%" height={50} className="img-fluid px-0" src={MainNewlogo} alt="" />

                            </Link>
                        </div>
                        <div className="col-lg-8 align-self-center navbar-001-hide">
                            <nav className="navbar-001">
                                <Link onClick={scrollToHome} to="/" aria-current="page" className="nav-link w-nav-link ">Home</Link>
                                <Link onClick={scrollToHome} to="/about" className="nav-link w-nav-link">About</Link>
                                <Link onClick={scrollToHome} to="/services" className="nav-link w-nav-link">Service</Link>
                                
                                <Link onClick={scrollToHome} to="/clients" className="nav-link w-nav-link">Clients</Link>
                                {/* <Link onClick={scrollToHome} to="/career" className="nav-link w-nav-link">Careers</Link> */}
                                {/* <Link onClick={scrollToHome} to="/training-development" className="nav-link w-nav-link">Training</Link> */}
                                <Link onClick={scrollToHome} to="/blogs" className="nav-link w-nav-link">Blog</Link>
                                <Link onClick={scrollToHome} to="/portfolio" className="nav-link w-nav-link">Portfolio</Link>
                                <Link onClick={scrollToHome} to="/team" className="nav-link w-nav-link">Team</Link>

                            </nav>
                        </div>
                        <div className="col-lg-2 text-end contact-button align-self-center">
                            <Link onClick={scrollToHome} to='/contact-us' className="btn">Free Consultation</Link>
                        </div>

                        <div className="col-8 col-md-9 align-self-center  text-end new-menu-hide px-0">
                            <Link onClick={scrollToHome} to='/'><i className="fa-solid fa-house" style={{ color: "#42ADE4", fontSize: "20px", paddingRight: "10px" }}></i></Link>
                            <button className="btn shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="fa-solid fa-bars h2 mb-0" style={{ color: "#42ADE4" }}></i></button>
                        </div>

                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div className="offcanvas-header">
                                <div className="col-6">
                                    <Link onClick={scrollToHome} to="/">
                                        <img width="100%" height={50} className="img-fluid px-0" src={MainNewlogo} alt="" />

                                    </Link>
                                </div>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body p-0">
                                <Link onClick={scrollToHome} to="/" aria-current="page" className="nav-link w-nav-link ">Home</Link>
                                <Link onClick={scrollToHome} to="/about" className="nav-link w-nav-link">About</Link>
                                <Link onClick={scrollToHome} to="/services" className="nav-link w-nav-link">Services</Link>
                                <Link onClick={scrollToHome} to="/clients" className="nav-link w-nav-link">Clients</Link>
                                <Link onClick={scrollToHome} to="/career" className="nav-link w-nav-link">Careers</Link>
                                <Link onClick={scrollToHome} to="/training-development" className="nav-link w-nav-link">Training</Link>
                                <Link onClick={scrollToHome} to="/blogs" className="nav-link w-nav-link">Blog</Link>
                                <Link onClick={scrollToHome} to="/portfolio" className="nav-link w-nav-link">Portfolio</Link>
                                <Link onClick={scrollToHome} to="/team" className="nav-link w-nav-link">Team</Link>
                                <Link onClick={scrollToHome} to="/contact-us" className="nav-link w-nav-link">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </>
    );
}

export default Navbar;
