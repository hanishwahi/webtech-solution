import React from 'react'
import { Link } from 'react-router-dom'


function GetQuote() {
    return (
        <>

            <div className="container-fluid ready-to-grow mx-0">
                <div className="container-xl">
                    <div className="row">
                        <div className="col ready-to-grow-content">
                            <h2>Ready to Grow</h2>
                            <h1>Get Your Free Quote Today</h1>
                            <Link to='/'>Get Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetQuote