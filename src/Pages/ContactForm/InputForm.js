import React from 'react'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function InputForm() {

    const Navigate= useNavigate()

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hmnkl0m', 'template_512smz8', e.target, 'DaUmEfgqFFS3JD4_d')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
        Navigate('/thankyou')
        // toast.success('Message sent Successfully!');
    };


    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>

            <div className='row contact-us'>
                <h1>Write to Us</h1>
            </div>
            <div className='row contact-us'>
                <p>Want to give a competitive edge to your business with results-driven digital marketing services? Fill out the following form and our team will be in touch with you SHORTLY!!</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='row justify-content-between'>
                    <div className="form-outline col-12 col-sm-6 mb-4">
                        <label className="form-label fw-bold" htmlFor="form4Example1">*Name</label>
                        <input type="text" name="name" autoComplete="on" id="form4Example1" required className="form-control" placeholder='Full Name' />
                    </div>

                    <div className="form-outline col-12 col-sm-6 mb-4">
                        <label className="form-label fw-bold" htmlFor="form4Example2">*Phone</label>
                        <input type="number" name="phone" autoComplete="on" id="form4Example2" required className="form-control" placeholder='Enter your Phone number' />
                    </div>
                </div>
                <div className="form-outline mb-4 row">
                    <div className='col-sm-6 col-12'>
                        <label className="form-label text-dark fw-bold" htmlFor="form4Example2">*Email address</label>
                        <input type="email" name="email" autoComplete="on" id="form4Example3" required className="form-control" placeholder='Enter your Email ID' />
                    </div>
                    <div className='col-sm-6 col-12'>
                        <label className="form-label text-dark fw-bold" htmlFor="form4Example2">Select Time for call</label>
                        <input type="time" id="form4Example4" name="time" className="form-control" placeholder='Select Time' min="00:00" max="24:00" required />
                    </div>
                </div>

                <div className="form-outline mb-4 row">
                    <div className='col-sm-12 col-12'>
                        <label className="form-label text-dark fw-bold" htmlFor="form4Example2">*Service</label>
                        <select required defaultValue='' name='service' className="form-select" aria-label="Default select example">
                            <option value="" disabled>Select the services</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Web Development">Web Development</option>
                            <option value="App Development">App Development</option>
                            <option value="Graphic Designing">Graphic Designing</option>
                        </select>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label fw-bold" htmlFor="form4Example2">Website</label>
                    <input type="text" name="website" id="form4Example5" required className="form-control" placeholder='Optional' />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label fw-bold" htmlFor="form4Example3">*Message</label>
                    <textarea className="form-control" name="message" required id="form4Example6" rows="2" placeholder='Message...'></textarea>
                </div>
                <input onClick={scrollToHome} className='form-Button' type="submit" value="Submit" />
            </form>
            {/* <ToastContainer /> */}
        </>
    )
}

export default InputForm