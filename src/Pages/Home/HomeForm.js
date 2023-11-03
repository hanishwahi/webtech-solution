import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { countryName } from './CountryName';

function HomeForm() {
    const [selectedCountry, setselectedCountry] = useState("")

    const countryNameNew = countryName.map((countryName) => countryName.name)
 
    const countryCode = countryName.find((country) => country.name === selectedCountry);
    const countryCodeSelected = countryCode ? countryCode.dial_code : ''; 

    console.log(countryCode);

    const Navigate = useNavigate()

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



            <div className='bg-white home-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='row justify-content-between form-outline '>
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-bold" htmlFor="form4Example1">*Name</label>
                            <input type="text" name="name" autoComplete="on" id="form4Example1" required className="form-control" placeholder='Full Name' />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label text-dark fw-bold" htmlFor="form4Example2">*Email address</label>
                            <input type="email" name="email" autoComplete="on" id="form4Example3" required className="form-control" placeholder='Enter your Email ID' />
                        </div>
                    </div>

                    <div className="form-outline row">
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-bold" htmlFor="form4Example2">*Country</label>
                            <div className="row">
                                <div className="col-8">
                                    <select defaultValue="" name="country" id="" className="form-control" onChange={(e) => { setselectedCountry(e.target.value) }} >
                                        <option value="" disabled >Select the country</option>
                                        {countryNameNew.map((country, index) => (
                                            <option key={index}  >
                                                {country}
                                            </option>

                                        ))}
                                    </select>
                                </div>
                                <div className="col-4">
                                    <input name="code" type="text" value={countryCodeSelected} placeholder='code' className='form-control w-100' />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 mb-4">
                            <label className="form-label fw-bold" htmlFor="form4Example2">*Phone</label>
                            <input type="number" name="phone" autoComplete="on" id="form4Example2" required className="form-control" placeholder='Enter your Phone number' />
                        </div>

                    </div>
                    <div className="form-outline mb-4 row">
                        <div className='col-sm-6 col-12'>
                            <label className="form-label text-dark fw-bold" htmlFor="form4Example2">*Service</label>
                            <select required defaultValue='' name='service' className="form-select" aria-label="Default select example">
                                <option value="" disabled>Select the services</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="Graphic Designing">Graphic Designing</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label className="form-label text-dark fw-bold" htmlFor="form4Example2">Select Time for call</label>
                            <input type="time" id="form4Example4" name="time" className="form-control" placeholder='Select Time' min="00:00" max="24:00" required />
                        </div>
                    </div>

                    <input onClick={scrollToHome} className='form-Button' type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default HomeForm