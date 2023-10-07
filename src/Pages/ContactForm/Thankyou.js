import React from 'react'
import { Link } from 'react-router-dom'
import pdf from '../../Images/WebtechSolutions.pdf'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function Thankyou() {

    return (
        <>
            <Header />

            <div className="d-flex justify-content-center" style={{ backgroundColor: "#e2f5ff" }}>
                <div className=" border-0 py-5">
                    <div className="mb-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-success bi bi-check-circle" width="75" height="75"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path
                                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg>
                    </div>
                    <div className="text-center thankyou-para py-3">
                        {/* <h1>Thank You for Contacting Us !</h1>
                        <p>We will get in touch with you soon.</p> */}
                        <p>Thank you for sharing your requirements with us. While we review your information, we invite you to download our company profile in PDF format. Simply click the link below to get a better understanding of our Company, Work and capabilities</p><br />

                        <a type="application/pdf" href={pdf} download>Download the pdf</a><br /><br />
                    </div>
                    {/* <div className='text-center'>
                        <Link className='backTohome' to='/'>Back to home</Link>
                    </div> */}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Thankyou