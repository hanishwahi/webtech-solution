import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'


function BlogCaraousel() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        laptop: {
            breakpoint: { max: 1023, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 767, min: 577 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1
        }
    };

    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <div className="container-fluid blogs-carousel-main">
                <div className="container-xl">
                    <div className="row py-3">
                        <div className="col industries">
                            <h1>Blogs</h1>
                        </div>
                    </div>
                    <div className="row">
                        <Carousel responsive={responsive}>
                            <div className="row justify-content-around">
                                <div className="col-11">
                                    <div className="card">
                                        <Link onClick={scrollToHome} to={`/blogs/Golden-Rules-for-Elevating-Your-Creative-Vision`}>
                                            <div className="card-body p-0 shadow home-blog-box">
                                                <div className='row ratio ratio-16x9 object-fit m-0'>
                                                    <img className='img-fluid p-0' src="https://img.freepik.com/premium-photo/having-great-idea_102671-6148.jpg?w=360" alt='' />
                                                </div>

                                                <div className='row px-4 py-3'>
                                                    <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 home-blog-content'>
                                                        <h5 className="card-title mb-2" >Golden Rules for Elevating Your Creative Vision </h5>
                                                    </div>
                                                </div>

                                                <div className='row px-4 py-1 align-items-center'>
                                                    <div className='col-6 col-sm-6  col-md-12 col-lg-6 px-0 py-2 home-blogs-button'>
                                                        <Link>Read More...</Link>
                                                    </div>
                                                    <div className='col-6 col-sm-6 col-md-12 col-lg-6 text-end py-2 home-blog-content'>
                                                        <h6 className='h6 mb-0' >18-07-2023</h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-around">
                                <div className="col-11">
                                    <div className="card">
                                        <Link onClick={scrollToHome} to={`/blogs/How-to-Improve-Your-Website-Visibility`}>
                                            <div className="card-body p-0 shadow home-blog-box">
                                                <div className='row ratio ratio-16x9 object-fit m-0'>
                                                    <img className='img-fluid p-0' src="https://www.modalyst.co/wp-content/uploads/2016/08/SEO.jpg" alt='' />
                                                </div>

                                                <div className='row px-4 py-3'>
                                                    <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 home-blog-content'>
                                                        <h5 className="card-title mb-2" >How to Improve Your Website's Visibility</h5>
                                                    </div>
                                                </div>

                                                <div className='row px-4 py-1 align-items-center'>
                                                    <div className='col-6 col-sm-6  col-md-12 col-lg-6 px-0 py-2 home-blogs-button'>
                                                        <Link>Read More...</Link>
                                                    </div>
                                                    <div className='col-6 col-sm-6 col-md-12 col-lg-6 text-end py-2 home-blog-content'>
                                                        <h6 className='h6 mb-0' >19-07-2023</h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-around">
                                <div className="col-11">
                                    <div className="card">
                                        <Link onClick={scrollToHome} to={`/blogs/Exploring-the-Future-of-Website-Development`}>
                                            <div className="card-body p-0 shadow home-blog-box">
                                                <div className='row ratio ratio-16x9 object-fit m-0'>
                                                    <img className='img-fluid p-0' src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png" alt='' />
                                                </div>

                                                <div className='row px-4 py-3'>
                                                    <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 home-blog-content'>
                                                        <h5 className="card-title mb-2" >Exploring the Future of Website Development in 2023 and Beyond!</h5>

                                                    </div>
                                                </div>

                                                <div className='row px-4 py-1 align-items-center'>
                                                    <div className='col-6 col-sm-7  col-md-12 col-lg-6 px-0 py-2 home-blogs-button'>
                                                        <Link onClick={scrollToHome} to={`/blogs/Exploring-the-Future-of-Website-Development`}>Read More...</Link>
                                                    </div>
                                                    <div className='col-6 col-sm-5 col-md-12 col-lg-6 text-end py-2 home-blog-content'>
                                                        <h6 className='h6 mb-0' >20-07-2023</h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-around">
                                <div className="col-11">
                                    <div className="card">
                                        <Link onClick={scrollToHome} to={`/blogs/Golden-Rules-for-Elevating-Your-Creative-Vision`}>
                                            <div className="card-body p-0 shadow home-blog-box">
                                                <div className='row ratio ratio-16x9 object-fit m-0'>
                                                    <img className='img-fluid p-0' src="https://img.freepik.com/premium-photo/having-great-idea_102671-6148.jpg?w=360" alt='' />
                                                </div>

                                                <div className='row px-4 py-3'>
                                                    <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 home-blog-content'>
                                                        <h5 className="card-title mb-2" >Golden Rules for Elevating Your Creative Vision </h5>
                                                    </div>
                                                </div>

                                                <div className='row px-4 py-1 align-items-center'>
                                                    <div className='col-6 col-sm-7  col-md-12 col-lg-6 px-0 py-2 home-blogs-button'>
                                                        <Link onClick={scrollToHome} to={`/blogs/Golden-Rules-for-Elevating-Your-Creative-Vision`}>Read More...</Link>
                                                    </div>
                                                    <div className='col-6 col-sm-5 col-md-12 col-lg-6 text-end py-2 home-blog-content'>
                                                        <h6 className='h6 mb-0' >18-07-2023</h6>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogCaraousel