import React from 'react'
import { Link } from 'react-router-dom' 

function Blogs() {
    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
 
    return (
        <>
           
            <div className="col border-bottom">
                <div className="row px-0 justify-content-start">
                    <div className="col-lg-2 col-12 col-md-5 col-sm-6 px-0 align-self-center">
                        <img className="img-fluid" src="https://img.freepik.com/premium-photo/having-great-idea_102671-6148.jpg?w=360" alt='' />
                    </div>
                    <div className="col-lg-10 col-md-7 col-sm-6 align-self-center py-3 py-sm-0">
                        <div className='row px-2'>
                            <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 blog-content'>
                                <h5 className="card-title mb-2" >Golden Rules for Elevating Your Creative Vision </h5>
                            </div>
                        </div>
                        <div className='row px-2'>
                            <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 blog-content'>
                                <p className="card-title" >Design is an art form that conveys ideas, emotions, and messages beyond just aesthetics...</p>
                            </div>
                        </div>
                        <div className='row px-2 align-items-center'>
                            <div className='col-6 col-sm-5 col-md-6 col-lg-6 px-0 py-2 blogs-button'>
                                <Link onClick={scrollToHome} to={`/blogs/Golden-Rules-for-Elevating-Your-Creative-Vision`}>Read More</Link>
                            </div>
                            <div className='col-6 col-sm-7 col-md-6  col-lg-6 text-end py-2 blog-content'>
                                <h6 className='h6 mb-0' >18-07-2023</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col border-bottom">
                <div className="row px-0 justify-content-start">
                    <div className="col-lg-2 col-12 col-md-5 col-sm-6 px-0 align-self-center">
                        <img className="img-fluid" src="https://www.modalyst.co/wp-content/uploads/2016/08/SEO.jpg" alt='' />
                    </div>
                    <div className="col-lg-10 col-md-7 col-sm-6 align-self-center py-3">
                        <div className='row px-2'>
                            <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 blog-content'>
                                <h5 className="card-title mb-2" >How to Improve Your Website's Visibility</h5>
                            </div>
                        </div>
                        <div className='row px-2'>
                            <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 blog-content'>
                                <p className="card-title">Having an online presence is essential in the digital age for both individuals and organisations...</p>
                            </div>
                        </div>
                        <div className='row px-2 align-items-center'>
                            <div className='col-6 col-sm-5  col-md-6 col-lg-6 px-0 py-2 blogs-button'>
                                <Link onClick={scrollToHome} to='/blogs/How-to-Improve-Your-Website-Visibility'>Read More</Link>
                            </div>
                            <div className='col-6 col-sm-7 col-md-6 col-lg-6 text-end py-2 blog-content'>
                                <h6 className='h6 mb-0' >19-07-2023</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col border-bottom">
                <div className="row px-0 justify-content-start">
                    <div className="col-lg-2 col-12 col-md-5 col-sm-6 px-0 align-self-center">
                        <img className="img-fluid" src="https://www.appsdevpro.com/blog/wp-content/uploads/2022/09/Top-Web-Design-Development-Trends-You-Need-to-Know-in-2023.png" alt='' />
                    </div>
                    <div className="col-lg-10 col-md-7 col-sm-6 align-self-center py-3">
                        <div className='row px-2'>
                            <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 blog-content'>
                                <h5 className="card-title mb-2" >Exploring the Future of Website Development in 2023 and Beyond!</h5>
                            </div>
                        </div>
                        <div className='row px-2'>
                            <div className='col-sm-12 col-lg-12 col-12 col-md-12 px-0 blog-content'>
                                <p className="card-title">Websites have developed into potent tools that shape our online experiences as the internet...</p>
                            </div>
                        </div>
                        <div className='row px-2 align-items-center'>
                            <div className='col-6 col-sm-5  col-md-6 col-lg-6 px-0 py-2 blogs-button'>
                                <Link onClick={scrollToHome} to='/blogs/Exploring-the-Future-of-Website-Development'>Read More</Link>
                            </div>
                            <div className='col-6 col-sm-7 col-md-6 col-lg-6 text-end py-2 blog-content'>
                                <h6 className='h6 mb-0' >20-07-2023</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
 

        </>
    )
}

export default Blogs