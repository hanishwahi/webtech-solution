import React from 'react'
import technology from '../../../Images/webtechnologies.webp'

function Technologies() {
    return (
        <div className="container-fluid technologies-main">
            <div className="container-xl">
                <div className="row technologies">
                    <h1><span>Technologies</span> We Work on</h1>
                </div>
                <div className="row pt-5 text-center">
                    <div className="col-lg-12 mb-3">
                        <img src={technology} alt="" loading='lazy' width="90%" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Technologies