import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



function Career() {
    return (
        <>
            <Header />
            <div className='container-fluid career-main'>
                <div className='container-lg'>
                    <div className='row py-3 mb-3 career-001 text-center'>
                        <h1>Career at Webtech Solutions service</h1>
                        <p>We want to make agency life peasant, productive and empowering</p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 mb-4'>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button shadow-none fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            SEO Executive - Immediate Joining
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body pb-0">
                                            <div className='mb-3'>
                                                <h1 className='h5'>Job description:</h1>
                                                <p>We are searching for a passionate SEO Executive to join our team. The SEO Executive responsibilities include analyzing and identifying gaps in website content, optimizing pages for improved search results, building links, and supervising content creation. You should be able to identify marketing opportunities and come up with strategies to increase website traffic.</p>
                                            </div>
                                            <div className='mb-4'>
                                                <h1 className='h5'>Roles And Responsibility:</h1>
                                                <p>Conducting keyword research using dedicated software, and generating new keyword ideas. Analyzing website and social media pages, then making recommendations for improvement. Monitoring website traffic, search results, and developing strategies. Generating content ideas and delegating these to the team. Overseeing content creation and offering suggestions. Updating outdated content. Optimizing pages for desktop, tablet, and mobile use. Developing link-building strategies. Managing paid search campaigns. Keeping up to date with new trends and best SEO practices.</p>
                                            </div>
                                            <div className='mb-4 jobrequiremnt'>
                                                <h1 className='h5'>SEO Executive Requirements:</h1>
                                                <ul>
                                                    <li>Previous experience in a similar role would be advantageous.</li>
                                                    <li>Excellent written, verbal, and analytical skills.</li>
                                                    <li>Great customer service and interpersonal skills.</li>
                                                    <li>Ability to follow specifications.</li>
                                                    <li>Ability to work under pressure.</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className='mb-1'><strong>Experience :</strong>  Fresher </p>
                                                <p className='mb-1'><strong>No of Position :</strong>  5 </p>
                                                <p className='mb-1'> <strong>Location :</strong>  Mohali</p>
                                                <p className='mb-1'><strong>Interested Candidate call at :</strong><Link to="tel:+91 8427682603"> +91 8427682603</Link></p>

                                            </div>

                                        </div>
                                        <div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 mb-4'>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button shadow-none fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
                                            Business Development
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body pb-0">
                                        <div className='mb-3'>
                                                <h1 className='h5'>Job Description:</h1>
                                                <p> We are seeking a dynamic and results-driven Business Development Manager to join our team. The ideal candidate will be responsible for identifying new business opportunities, cultivating relationships with potential clients, and expanding our market presence. This role requires a strategic thinker with strong communication and negotiation skills, as well as the ability to drive revenue growth.
</p>
                                            </div>
                                            <div className='mb-3'>
                                                <h1 className='h5'>Roles & Responsibilities:</h1>
                                                <p>Identify and research potential business opportunities conduct market research, analyse industry trends, and identify potential clients or target markets for the organization's products or services. <br /> <br />
                                                Lead generation and prospecting proactively reach out to potential clients through various channels such as cold calling, emails, networking events, and social media to generate leads and establish initial contact. <br /><br />
                                                Relationship building Build and maintain strong relationships with clients, key decision-makers, and stakeholders. Understand their needs, requirements, and pain points to provide suitable solutions and position the organization's offerings effectively. <br /><br />
                                                Client management act as a point of contact for clients, ensuring high levels of customer satisfaction. Address client concerns, resolve issues, and provide ongoing support to build long-term relationships and foster repeat business.
</p>
                                            </div>
                                           
                                            <div className="mb-4">
                                                <p> <strong>Required Skills And Abilities:</strong> upwork, freelancer, proposal writing</p>
                                            </div>

                                            <div>
                                                <p className='mb-1'><strong>Experience :</strong>  2-4 year </p>
                                                <p className='mb-1'> <strong>Location :</strong>  Mohali</p>
                                                <p className='mb-1'><strong>Interested Candidate call at :</strong><Link to="tel:+91 8427682603"> +91 8427682603</Link></p>

                                            </div>

                                        </div>
                                        <div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container-fluid pb-4'>
                < div className='container-lg' >
                    <div className='row career-001 text-center'>
                        <div className='col'>
                            <h1>Don’t see  a suitable position?</h1>
                            <p>We are for everyone. Write to us to  <Link className='text-decoration-none' to='mailto:info@webtechsolutionsservice.com'>info@webtechsolutionsservice.com</Link></p>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    )
}

export default Career