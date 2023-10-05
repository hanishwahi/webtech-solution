import React, { useState, useEffect } from 'react'

function CounterRecord() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            if (counter1 === 98) {
                setCounter1(counter1);
            }
            else {
                setCounter1((counter1) => counter1 + 1);
            }
        }, 40);

        return () => {
            clearInterval(interval);
        };
    }, [counter1]);



    useEffect(() => {
        const interval2 = setInterval(() => {
            if (counter2 === 100) {
                setCounter2(counter2)
            }
            else {
                setCounter2((counter2) => counter2 + 1);

            }
        }, 40);

        return () => {
            clearInterval(interval2);
        };
    }, [counter2])

    useEffect(() => {
        const interval3 = setInterval(() => {
            if (counter3 === 100) {
                setCounter3(counter3)
            }
            else {
                setCounter3((counter3) => counter3 + 1);
            }
        }, 40);

        return () => {
            clearInterval(interval3);
        };
    }, [counter3])

    useEffect(() => {
        const interval4 = setInterval(() => {
            if (counter4 === 88) {
                setCounter4(counter4)
            }
            else {
                setCounter4((counter4) => counter4 + 1);
            }
        }, 40);

        return () => {
            clearInterval(interval4);
        };
    }, [counter4])

    return (
        <>
            <div className='container-fluid my-md-5 my-4'>
                <div className='container-xl'>
                    <div className='row justify-content-lg-between align-items-center'>
                        <div className='col-lg-3 col-sm-6 col-md-4 mb-3 mb-md-0 counter-box-margin-top'>
                            <div className='counter-box'>
                                <div className="counter-box-inner">
                                    <div className="col-lg-12 col-sm-12 col-12 Counter-1"><h1>{counter1}%</h1></div>
                                </div>
                                <div className='col-lg-12 col-sm-12 col-12 Counter-content'>
                                    <h2>Success Rate</h2>
                                    <p>Deliver outstanding ROI and surpass predefined KPIs</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 col-md-4 mb-3 mb-md-0'>
                            <div className='counter-box'>
                                <div className="counter-box-inner">
                                    <div className="col-lg-12 col-sm-12 col-12 Counter-1"><h1>{counter2}%</h1></div>
                                </div>
                                <div className='col-lg-12 col-sm-12 col-12 Counter-content'>
                                    <h2>Commitment</h2>
                                    <p>Maintaining a long-lasting, valuable partnership for your digital success</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 col-md-4 mb-3 mb-md-0 counter-box-margin-top'>
                            <div className='counter-box'>
                                <div className="counter-box-inner">
                                    <div className="col-lg-12 col-sm-12 col-12 Counter-1"><h1>{counter4}%</h1></div>
                                </div>
                                <div className='col-lg-12 col-sm-12 col-12 Counter-content'><h2>Return Customer</h2>
                                    <p>Converting returning customers into repeat customers.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-6 col-md-4 mb-3 mb-md-0'>
                            <div className='counter-box'>
                                <div className="counter-box-inner">
                                    <div className="col-lg-12 col-sm-12 col-12 Counter-1"><h1>{counter3}%</h1></div>
                                </div>
                                <div className='col-lg-12 col-sm-12 col-12 Counter-content'>
                                    <h2>Credibility</h2>
                                    <p>Increase revenue while enhancing your brand's reputation.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterRecord