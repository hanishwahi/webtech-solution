import React from 'react'
import { Link } from 'react-router-dom'
import MainNewlogo from '../../Images/Webtech-logo.webp'

function NewNavBar() {
    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


   
 
    return (
        <>
            <div className="container-fluid sticky-top py-1 py-lg-0 border-bottom bg-white">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-5 col-sm-3 text-start align-self-center">
                            <Link onClick={scrollToHome} to='/'>
                                <img width="90%" height={50} className="img-fluid px-0" src={MainNewlogo} alt="" />
                            </Link>
                        </div>
                        <div className="col-lg-8 align-self-center navbar-001-hide">
                            <nav className="navbar navbar-expand-lg navbar-light navbar-001">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse justify-content-end" id="navbarExampleOnHover">
                                        <ul className="navbar-nav ps-lg-0" style={{ paddingLeft: "0.15rem" }}>
                                            <li className="nav-item">
                                                <Link onClick={scrollToHome} to="/" aria-current="page" className="nav-link w-nav-link ">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link onClick={scrollToHome} to="/about" className="nav-link w-nav-link">Who we are</Link>
                                            </li>

                                            <li className="nav-item dropdown dropdown-hover position-static">

                                                <Link className="nav-link w-nav-link dropdown-toggle " id="navbarDropdown" role="button"
                                                    data-mdb-toggle="dropdown" aria-expanded="false">Our Services <i className="fa-solid fa-caret-down"></i></Link>
                                                <div className="dropdown-menu mt-0" aria-labelledby="navbarDropdown" >


                                                    <div className="px-3">
                                                        <div className="row">
                                                            <div className="col-md-4 col-lg-6 mb-3 mb-lg-0">
                                                                <div className="list-group list-group-flush">
                                                                    <Link onClick={scrollToHome} to="/digital-marketing" className="list-group-item list-group-item-action">Digital Marketing</Link>
                                                                    <Link onClick={scrollToHome} to="/web-development" className="list-group-item list-group-item-action">Web Development</Link>
                                                                    <Link onClick={scrollToHome} to="/app-development" className="list-group-item list-group-item-action">App Development</Link>
                                                                    <Link onClick={scrollToHome} to="/graphic-designing" className="list-group-item list-group-item-action">Graphic Designing</Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-lg-6 mb-3 mb-lg-0">
                                                                <div className="list-group list-group-flush">
                                                                    <Link onClick={scrollToHome} to="/amazon-marketing" className="list-group-item list-group-item-action">Amazon Marketing</Link>
                                                                    <Link onClick={scrollToHome} to="/flipkart-marketing" className="list-group-item list-group-item-action">Flipkart Marketing</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link onClick={scrollToHome} to="/clients" className="nav-link w-nav-link">Our Clients</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link onClick={scrollToHome} to="/blogs" className="nav-link w-nav-link">Blog</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link onClick={scrollToHome} to="/portfolio" className="nav-link w-nav-link">Portfolio</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link onClick={scrollToHome} to="/our-team" className="nav-link w-nav-link">Team</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-2 text-end contact-button align-self-center">
                            <Link onClick={scrollToHome} to='/contact-us' className="">Get In Touch</Link>
                        </div>

                        <div className="col-7 col-sm-9 col-md-9 align-self-center  text-end new-menu-hide px-0">
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
                                <Link onClick={scrollToHome} to="/about" className="nav-link w-nav-link">Who we are</Link> 
                                <div className="dropdown">
                                    <a className="dropdown-toggle nav-link w-nav-link" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Our Services <i className="fa-solid fa-caret-down"></i>
                                    </a>

                                    <ul className="dropdown-menu" style={{columns:"2"}}>
                                        <li onClick={scrollToHome}><Link className="dropdown-item" to='/digital-marketing'>Digital Marketing</Link></li>
                                        <li onClick={scrollToHome}><Link className="dropdown-item" to='/web-development'>Web Development</Link></li>
                                        <li onClick={scrollToHome}><Link className="dropdown-item" to='/app-development'>App Development</Link></li>
                                        <li onClick={scrollToHome}><Link className="dropdown-item" to='/graphic-designing'>Graphic Designing</Link></li>
                                        <li onClick={scrollToHome}><Link className="dropdown-item" to='/amazon-marketing'>Amazon Marketing</Link></li>
                                        <li onClick={scrollToHome}><Link className="dropdown-item" to='/flipkart-marketing'>Flipkart Marketing</Link></li>
                                    </ul>
                                </div>
                                <Link onClick={scrollToHome} to="/clients" className="nav-link w-nav-link">Our Clients</Link>
                                <Link onClick={scrollToHome} to="/career" className="nav-link w-nav-link">Careers</Link> 
                                <Link onClick={scrollToHome} to="/blogs" className="nav-link w-nav-link">Blog</Link>
                                <Link onClick={scrollToHome} to="/portfolio" className="nav-link w-nav-link">Portfolio</Link>
                                <Link onClick={scrollToHome} to="/our-team" className="nav-link w-nav-link">Team</Link>
                                <Link onClick={scrollToHome} to="/contact-us" className="nav-link w-nav-link">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default NewNavBar