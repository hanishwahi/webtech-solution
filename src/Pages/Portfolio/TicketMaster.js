import React from 'react'
import ticketMasterCarousel from '../../Images/ticketMasterCarousel.webp'
 import { Link } from 'react-router-dom'

function TicketMaster() {

    return (
        <>

            <Link to='https://ticketmaster99.com/' target='_blank' className='text-decoration-none'>
                <div className="viewMoreButton">
                    <h1>Ticket Master</h1>
                </div>
                <div className=''>
                    <img src={ticketMasterCarousel} alt="" loading='lazy' className='img-fluid' />
                </div>
                <div className="viewMoreButton">
                    <h1>View More</h1>
                </div>
            </Link>
            {/* <button type="button" class="btn shadow-none position-rel" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <div className="viewMoreButton">
                    <h1>Ticket Master</h1>
                </div>
                <div className=''>
                    <img src={ticketMasterCarousel} alt="" loading='lazy' className='img-fluid' />
                </div>
                <div className="viewMoreButton">
                    <h1>View More</h1>
                </div>
            </button>

            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Ticket Master</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img width="100%" src={ticketMasterCarouselwall} alt="" loading='lazy' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default TicketMaster