import React from 'react'

function DMFaq() {
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
                                What is digital marketing, and why is it important for my business?  
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> <strong>Digital marketing</strong> is like a toolbox of tricks and strategies we use online to make more people know about your business, recognize your brand, and talk to the people who might buy your stuff. It's important because it helps you talk to lots of different people online, see how well your marketing is doing, and change things if they're not working, so you can see if your marketing is doing a good job in the online world we live in today.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How can digital marketing benefit my business specifically?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p><strong>Digital marketing </strong>has a lot of perks for your business. It helps you reach the right people, saves you money, lets you see how well things are going right away and allows you to make ads just the way you want. Plus, it can bring more visitors to your website, get you more potential customers, sell more stuff, and make more people know about your brand. All of this is done to fit your specific business needs and goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What digital marketing services does your agency offer?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> Our agency provides a variety of <strong>digital marketing</strong> services like making your website show up on Google, creating ads that only cost you when people click on them, promoting your business on social media, writing engaging content, sending emails to your customers, and more. We make sure to adapt our services to fit what you want to achieve with your business.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How long does it take to see results from digital marketing efforts?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> How quickly you'll see results in <strong>digital marketing</strong> varies based on what you do, how much you spend, and how well you're known online in your industry. Some things work quickly, like ads, while others, like SEO and content, take a bit longer. We'll guide you, keep you informed, and align our plans with your goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How do I measure the success of my digital marketing campaigns?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> We check if your <strong>digital marketing</strong> is effective by seeing how many people visit your site, turn into customers, click on your ads, and compare your earnings to marketing costs. Our team uses tools to track these stats and gives you reports. This helps you know how good your marketing is and make improvements.
                                    </p>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>



        </>
    )
}

export default DMFaq