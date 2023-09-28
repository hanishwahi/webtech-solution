import React from 'react'
import appTechnologies from '../../../Images/Apptechnogies.webp'

function AppTechnologies() {
    return (
        <div className="container-fluid technologies-main">
            <div className="container-xl">
                <div className="row technologies">
                    <h1><span>Technlogies</span> We Work on</h1>
                </div>
                <div className="row pt-5 text-center">
                    <div className="col-lg-12 col-4 col-sm-3 mb-3">
                        <img src={appTechnologies} alt="" loading='lazy' width="90%" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AppTechnologies