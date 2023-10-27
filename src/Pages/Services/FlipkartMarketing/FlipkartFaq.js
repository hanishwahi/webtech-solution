import React from 'react'

function FlipkartFaq() {
    return (
        <>
            <div className="container-fluid faq-main-top">
                <div className="container-xl">
                    <div className="faq-main">
                        <h1><span>Frequently Asked </span> Questions</h1>
                    </div>

                </div>
                <div className='container'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is Flipkart Marketing Services?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Flipkart Marketing Services is a platform provided by Flipkart for businesses, brands, and sellers to promote and market their products on the Flipkart e-commerce platform.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Who can use Flipkart Marketing Services?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Flipkart Marketing Services is open to sellers, brands, and advertisers looking to enhance their visibility and sales on Flipkart.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What are the key advertising options offered by Flipkart Marketing Services?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Flipkart Marketing Services offers various advertising options, including Sponsored Products, Sponsored Brand, Flipkart Ads, and more.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
 
        </>
    )
}

export default FlipkartFaq