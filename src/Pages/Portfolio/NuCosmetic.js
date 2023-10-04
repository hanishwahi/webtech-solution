import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import nuCosmeticCarousel from '../../Images/NuCosmeticCarousel.webp'
 import { Link } from 'react-router-dom'



function NuCosmetic() {
    // const responsive = {
    //     superLargeDesktop: {

    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 4
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };
    return (
        <>
            <Link to='https://nucosmetics.in/' target='_blank' className='text-decoration-none'>
                <div className="viewMoreButton">
                    <h1>NU Cosmetics</h1>
                </div>
                <div className=''>
                    <img src={nuCosmeticCarousel} alt="" loading='lazy' width="100%" />
                </div>
                <div className="viewMoreButton">
                    <h1>View More</h1>
                </div>
            </Link>

            {/* <button type="button" class="btn shadow-none position-rel" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <div className="viewMoreButton">
                    <h1>NU Cosmetics</h1>
                </div>
                <div className=''>
                    <img src={nuCosmeticCarousel} alt="" loading='lazy' width="100%" />
                </div>
                <div className="viewMoreButton">
                    <h1>View More</h1>
                </div>
            </button>

            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">NU Cosmetics</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <Carousel responsive={responsive} swipeable={false}
                                    draggable={true}
                                    showDots={true}
                                    ssr={true}  
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={2000}
                                    keyBoardControl={true}
                                    dotListClass="custom-dot-list-style"
                                    itemClass="carousel-item-padding-40-px">
                                    <div className='p-3 mb-4'>
                                        <div className='border'>
                                            <img src={NUIMG1} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='p-3 mb-4'>
                                        <div className='border'>
                                            <img src={NUIMG1} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='p-3 mb-4'>
                                        <div className='border'>
                                            <img src={NUIMG1} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='p-3 mb-4'>
                                        <div className='border'>
                                            <img src={NUIMG1} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='p-3 mb-4'>
                                        <div className='border'>
                                            <img src={NUIMG1} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className='p-3 mb-4'>
                                        <div className='border'>
                                            <img src={NUIMG1} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                </Carousel>
                                 
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}


        </>
    )
}

export default NuCosmetic