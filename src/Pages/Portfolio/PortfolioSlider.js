import React from 'react'
import NuCosmetic from './NuCosmetic'
import CarParts from './CarParts'
import TicketMaster from './TicketMaster'

function PortfolioSlider() {
    return (
        <>
            <div className="container-fluid portfolio-nu-main">
                <div className="container-xl">
                    <div className="row">
                        <div className="col how-we-work pb-3">
                            <h1>Portfolio</h1>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 col-6 mb-3">
                            <div>
                                <NuCosmetic />
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-3">
                            <div>
                                <CarParts />
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-3">
                            <div>
                                <TicketMaster />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PortfolioSlider