import React from 'react'
import graphicTechnologies from '../../../Images/Graphic designtechno.png'

function GraphicTechnologies() {
    return (
        <div className="container-fluid technologies-main">
            <div className="container-xl">
                <div className="row technologies">
                    <h1><span>Technologies</span> We Work on</h1>
                </div>
                <div className="row pt-5 text-center">
                    <div className="col-lg-12 col-12 col-sm-12 mb-3">
                        <img loading='lazy' src={graphicTechnologies} alt="" width="90%" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default GraphicTechnologies