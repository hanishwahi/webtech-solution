import React from 'react'
import seo from '../../../../Images/seo icon.png'
import ranking from '../../../../Images/ranking.png'
import traffic from '../../../../Images/traffic.png'
import leads from '../../../../Images/Leads.png'
import roi from '../../../../Images/ROI.png'
import websiteaudit from '../../../../Images/website Audit.png'
import keywordresearch from '../../../../Images/Keyword Resarch.png'
import linkbuilding from '../../../../Images/Link buildig.png'
import urlopt from '../../../../Images/URL opt.png'
import contentcreation from '../../../../Images/SEO content.png'
import Reporting from '../../../../Images/Reporting & analysis.png'

function GrowBusiness() {
    return (
        <>
            <div className="container-fluid seo-growbusiness">
                <div className="container-xl">
                    <div className="row growbusiness-text">
                        <h1>How Can We Help You Grow Your Business through SEO? </h1>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box'>
                                <img src={seo} alt="" width={55} />
                                <h2>seo</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={ranking} alt="" width={55} />
                                <h2>Ranking</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={traffic} alt="" width={62} />
                                <h2>Traffic</h2>
                            </div>
                        </div>
                         
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={leads} alt="" width={55} />
                                <h2>More Leads</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 col-sm-4 col-md-3 mb-3">
                            <div className='growbusiness-box '>
                                <img src={roi} alt="" width={55} />
                                <h2>Increase ROI</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container-xl">
                    <div className="row seo-work">
                        <h1>Our Seo Work Includes</h1>
                        <p>Our SEO work involves boosting your online visibility, ensuring you appear on the first page of SERPs for relevant keywords, and driving valuable leads and sales, making it a crucial component of your business growth strategy.</p>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={websiteaudit} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Website Audit</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>A thorough examination of your online presence to identify technical issues, assess performance, and uncover opportunities for improvement.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={keywordresearch} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Keyword Search & Analysis</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Comprehensive keyword research and analysis pinpoint the most effective keywords to target, optimizing your content for search engines.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={linkbuilding} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Link Building</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Building high-quality backlinks from reputable sources enhances your website's credibility and boosts its ranking in search engine results.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={urlopt} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Keyword & URL Optimization</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Fine-tune your web content for better search engine visibility and user experience by optimizing keywords and URLs strategically.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={contentcreation} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>SEO Content Creation</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Crafting high-quality, user-friendly content that aligns with SEO best practices to engage your audience and boost organic traffic.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4 col-3">
                                    <img src={Reporting} alt="" width={60} />
                                </div>
                                <div className="col-md-9 col-sm-8 col-9 seo-work-text">
                                    <h3>Reporting & Analysis</h3>
                                </div>
                            </div>
                            <div className="row pb-3 seo-work-text">
                                <p>Monitoring and evaluating your SEO efforts through data-driven insights allows for continuous optimization and improved performance.</p>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default GrowBusiness