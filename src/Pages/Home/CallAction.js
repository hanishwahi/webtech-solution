import React from 'react'
import { Link } from 'react-router-dom'

function CallAction() {
    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <div className="container-fluid call-action-bg">
                <div className="container-xl">
                    <div className="row call-action-content">
                        <h1>We are trusted by leading Companies around the world. </h1>
                        <p>talk to our Digital Marketing Stratgist now for a 360 Degree Digital Marketing Solutions  </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 text-sm-end text-center mb-3 mb-sm-0 call-action-button1"> 
                               <h1><Link to='/contact-us' onClick={scrollToHome}>Request Free Quote</Link></h1>  
                        </div>
                        <div className="col-lg-6 col-sm-6 text-sm-start text-center call-action-button2"> 
                              <h1><Link to="tel:+91 8427682603"><i className="fa-solid fa-phone"></i> +91 8427682603</Link> </h1> 
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CallAction