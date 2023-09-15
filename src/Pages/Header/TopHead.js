import React from 'react'
import { Link } from 'react-router-dom'

function TopHead() {
  return (
    <>
      <div className='container-fluid py-2 py-sm-0 py-lg-1 border-bottom top-head-bg'>
        <div className='container-lg'>
          <div className='row'>
            <div className='col-lg-10 col-md-9 col-sm-12 col-12 align-self-center py-sm-2 py-md-0'>
              <div className='row px-1'>
                <div className='col-lg-7 col-md-6 col-sm-6 col-12 top-Nav-contact px-0 d-flex gap-2 align-items-center justify-content-sm-end justify-content-center'>
                  <i className="fa-solid fa-phone" style={{ color: "#00db00" }}></i>
                  <Link to="tel:+91 8427682603"> +91 8427682603</Link>
                </div>
                <div className='col-lg-5 col-md-6 col-sm-6 col-12 top-Nav-contact top-Nav-contact-hide1 d-flex gap-2 align-items-center px-0  justify-content-center'>
                  <i className="fa-solid fa-envelope" style={{ color: "#cf2e2e" }}></i>
                  <Link to="mailto:sales@webtechsolutionsservice.com">info@webtechsolutionsservice.com</Link>
                </div>
              </div>
            </div>
            <div className='top-Nav-contact-hide col-lg-2 col-md-3 col-sm-12   justify-content-sm-end d-flex gap-3 justify-content-center align-items-center top-nav-content'>
              <Link to="https://www.linkedin.com/company/webtechsolutionsservice/" target="_blank" className="social-icon-nav"><i className="fa-brands fa-linkedin"></i></Link>
              <Link to="https://www.instagram.com/webtechsolutionsservice/" target="_blank" className="social-icon-nav"><i className="fa-brands fa-instagram"></i></Link>
              <Link to="https://www.facebook.com/webtechsolutionsservice" target="_blank" className="social-icon-nav"><i className="fa-brands fa-square-facebook"></i></Link>
              <Link to="https://twitter.com/webtechpvtltd" target="_blank" className="social-icon-nav"><i className="fa-brands fa-square-x-twitter"></i></Link>
              <Link to="https://in.pinterest.com/webtechsolutionsservice/" target="_blank" className="social-icon-nav"><i className="fa-brands fa-pinterest-p"></i></Link>
              <Link to="https://www.youtube.com/@webtechsolutionsservice" target="_blank" className="social-icon-nav"><i className="fa-brands fa-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHead