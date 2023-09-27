import React from 'react'

function Faq() {
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
                                What is web development, and why do I need it?  
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> <strong>Web development </strong>  is the process of building and maintaining websites and web applications. You need it to establish an online presence, reach a wider audience, and provide information or services to your target audience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How long does it take to develop a website?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> The timeline for <strong>web development</strong> varies depending on the complexity of the project. Simple websites can be completed in a few weeks, while complex web applications may take several months.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What technologies and programming languages are used in web development?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Common technologies include <strong> HTML, CSS, JavaScript, React, Node, PHP, Python</strong> , and various web development frameworks and libraries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                What is web hosting, and how do I choose the right hosting provider?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> <strong>Web hosting</strong> is where your website's files are stored and made accessible on the internet. Factors to consider when choosing a hosting provider include server reliability, security, scalability, and customer support.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button faq shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What is website maintenance, and why is it important?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p> <strong>Website maintenance</strong> includes updates, security patches, and regular backups to keep your website secure and running smoothly. It's crucial to ensure your website remains functional and secure.
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

export default Faq