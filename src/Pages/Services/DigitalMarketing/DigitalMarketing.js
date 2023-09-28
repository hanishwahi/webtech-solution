import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import dm from './../../../Images/service-dummy.jpg'

function DigitalMarketing() {
  return (
    <>
      <Header />
      <div className="container-fluid py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-dm-bg">
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-dm-bg">
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-dm-bg">
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-dm-bg">
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DigitalMarketing