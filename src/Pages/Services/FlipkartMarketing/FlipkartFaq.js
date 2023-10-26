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
                                    What is Amazon marketing Services?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>If your business sells products on Amazon and isn’t getting much visibility, then you need to start using Amazon marketing services. Amazon online marketing is an open marketplace where you can list your products on the site and market them too with the help of an Amazon marketing agency.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How does Amazon marketing services work?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Amazon is one of the largest places to market your products online. But using the Amazon marketing platform is a crucial factor when it comes to sales. Similar to marketing on Google, Amazon marketing services help your products rank higher when it matches a particular keyword when searched for. What an Amazon marketing service agency can do is put your ad in front of a relevant shopper. This way your product will be in the limelight and get clicked and explored thus leading to more chances of being sold.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How does Amazon advertising work? How to advertise on Amazon?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> Amazon advertising services include Pay Per Click Ads, sponsored brand management, video advertising, Amazon AI advertising management and more. There is no specific Amazon ad agency who will get this done for you. You can extract the benefits of advertising in Amazon by selecting a good Amazon advertising agency or an Amazon marketing agency who specializes in this service. The result – better prospects and better profits for your business. Amazon marketing services costs vary depending on the level of expertise of the Amazon marketing company you are considering. If you have never registered your product or advertised on Amazon here is the Amazon Marketing Services Guide to help you. </p>
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