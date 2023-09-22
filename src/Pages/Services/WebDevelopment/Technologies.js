import React from 'react'
import techicon from '../../../Images/hospital.png'

function Technologies() {
    return (
        <div className="container-fluid technologies-main">
            <div className="container-xl">
                <div className="row technologies">
                    <h1><span>Technlogies</span> We Work on</h1>
                </div>
                <div className="row pt-5 text-center">
                    <div className="col-lg-2">
                        <img src={techicon} alt="" width={60}/>
                    </div>
                    <div className="col-lg-2">
                        <img src={techicon} alt="" width={60}/>
                    </div>
                    <div className="col-lg-2">
                        <img src={techicon} alt="" width={60}/>
                    </div>
                    <div className="col-lg-2">
                        <img src={techicon} alt="" width={60}/>
                    </div>
                    <div className="col-lg-2">
                        <img src={techicon} alt="" width={60}/>
                    </div>
                    <div className="col-lg-2">
                        <img src={techicon} alt="" width={60}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies