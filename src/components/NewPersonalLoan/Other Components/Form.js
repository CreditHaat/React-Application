import React, { useState } from "react";
import logo2 from '../NewPersonalLoanImages/happy image3.png'
import './Form.css'
import happyImage from '../NewPersonalLoanImages/happy image3.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import formPageImage from '../NewPersonalLoanImages/Form Page Image.png';
import formPageImage2 from '../NewPersonalLoanImages/FormPageImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormPageCarousel from "./FormPageCarousel";
// import NewFormPageImage from '../NewPersonalLoanImages/NewFormPageImage-removebg-preview.png';
import NewFormPageImage from '../NewPersonalLoanImages/NewFormPageImage.png';
// import NewFormPageImage2 from '../NewPersonalLoanImages/FormPageImage2 (2).png';
import NewFormPageImage2 from '../NewPersonalLoanImages/FormPageImage2.png';
import NewFormPageImage3 from '../NewPersonalLoanImages/FormPageImage3.png';

function FormPage({ formData, handleChange, onSubmit }) {
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName) {
            errors.firstName = "First name is required";
        } else if (!/^[a-zA-Z]*$/.test(formData.firstName)) {
            errors.firstName = "First name must contain only letters";
        }
        if (!formData.lastName) {
            errors.lastName = "Last name is required";
        } else if (!/^[a-zA-Z]*$/.test(formData.lastName)) {
            errors.lastName = "Last name must contain only letters";
        }
        if (!formData.mobileNumber) {
            errors.mobileNumber = "Mobile number is required";
        } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
            errors.mobileNumber = "Please enter a valid 10-digit mobile number";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(e);
        }
    };

    const images = [
        NewFormPageImage,
        NewFormPageImage2,
        NewFormPageImage3,
        // Add more image URLs as needed
      ];

    return (
        <>
            <section className="container banner" style={{borderRadius: '20px', marginTop: '10px', backgroundColor: '#f2edff' }}>
                <div className="row py-md-5 px-md-5" style={{ display: "flex" }}>
                {/* style={{height:'220px'}} */}
                    <div className="col-md-6">
                        {/* <div className="row" style={{ display: "flex" }}>
                            <div className="col-md-12" style={{ display: "flex",justifyContent: "center",alignItems: "center"}}>
                                <div style={{width:"49%",float:"left"}}>
                                    <h1 className="banner_title" style={{ fontFamily: "'Noto Sans'", fontWeight: "500", margin:"auto" }}>
                                        Getting a loan <br />made simple <br />and fast
                                    </h1>
                                </div>
                                <div className="text-center" style={{width:"49%",float:"right"}}>
                                    <figure className="figure">
                                        <img src={happyImage} className="figure-img img-fluid banner_img" alt="..." style={{ height: "auto", width: "100%", maxWidth: "300px", margin: "0 auto 1rem" }} />
                                    </figure>
                                </div>
                            </div>
                        </div> */}

                        {/* <img src={NewFormPageImage} className="figure-img img-fluid banner_img" alt="..." /> */}
                        {/* <img src={NewFormPageImage2} className="figure-img img-fluid banner_img" alt="..." /> */}
                        {/* <img src={NewFormPageImage3} className="figure-img img-fluid banner_img" alt="..." /> */}
                        
                        <FormPageCarousel images={images}/>
                        
                    </div>
                    <div className="col-md-6 py-md-5 px-md-5" style={{ justifyContent: "center", alignItems: "center" }}>
                        <div className="row" style={{ display: "flex" }}>
                            <form onSubmit={handleSubmit}>
                            <div className="input-group mb-5">
                                    <input type="text" className={`form-control textBox ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First Name" aria-label="First Name" aria-describedby="first-name-icon" name="firstName" value={formData.firstName || ''} onChange={handleChange} style={{ border: '1px solid #3e2780', borderRadius: '5px',borderRight:'none',borderTopRightRadius:'0px',borderBottomRightRadius:'0px' }} />
                                    <span className="input-group-text" id="first-name-icon" style={{ border: '1px solid #3e2780', borderRadius: '5px',borderLeft:'none',borderTopLeftRadius:'0px',borderBottomLeftRadius:'0px' }}><i className="bi bi-person"></i></span>
                                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                </div>
                                <div className="input-group mb-5">
                                    <input type="text" className={`form-control textBox ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Last Name" aria-label="Last Name" aria-describedby="last-name-icon" name="lastName" value={formData.lastName || ''} onChange={handleChange} style={{ border: '1px solid #3e2780', borderRadius: '5px',borderRight:'none',borderTopRightRadius:'0px',borderBottomRightRadius:'0px' }} />
                                    <span className="input-group-text" id="last-name-icon" style={{ border: '1px solid #3e2780', borderRadius: '5px',borderLeft:'none',borderTopLeftRadius:'0px',borderBottomLeftRadius:'0px' }}><i className="bi bi-person"></i></span>
                                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                </div>
                                <div className="input-group mb-2" >
                                    <input type="number" className={`form-control textBox ${errors.mobileNumber ? 'is-invalid' : ''}`} placeholder="Mobile Number" aria-label="Mobile Number" aria-describedby="mobile-number-icon" name="mobileNumber" value={formData.mobileNumber || ''} onChange={handleChange} style={{ border: '1px solid #3e2780', borderRadius: '5px',borderRight:'none',borderTopRightRadius:'0px',borderBottomRightRadius:'0px' }} />
                                    <span className="input-group-text" id="mobile-number-icon" style={{ border: '1px solid #3e2780', borderRadius: '5px',borderLeft:'none',borderTopLeftRadius:'0px',borderBottomLeftRadius:'0px' }} ><i className="bi bi-phone"></i></span>
                                    {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
                                </div>
                                <div className="input-group mb-2 text-center">
                                    <p className="terms-text" style={{display:'none' }}>
                                        By clicking "Send OTP" button, you agree to our <a href="/terms">Terms and Conditions</a>
                                    </p>
                                </div>

                                <div className="input-group mb-2 text-center">
                                    <p className="terms-text" style={{height: '40px',overflowX: 'hidden',overflowY: 'auto'}}>
                                    By clicking "Send OTP" button and accepting the terms and conditions set out here in, you provide your express consent to Social Worth Technologies Private Limited, Whizdm Innovations Pvt Ltd, Upwards Fintech Services Pvt Ltd, Tata Capital Financial Services Ltd, SmartCoin Financials Pvt Ltd, MWYN Tech Pvt Ltd, L&T Finance Ltd, Krazybee Services Pvt Ltd, Infocredit Services Pvt. Ltd, Incred Financial Services, IIFL Finance Ltd, EQX Analytics Pvt Ltd, EPIMoney Pvt Ltd, Bhanix finance and Investment LTd, Aditya Birla Finance Ltd to access the credit bureaus and credit information report and credit score. You also hereby irrevocably and unconditionally consent to usage of such credit information being provided by credit bureaus
                                    </p>
                                </div>
                                <div className="input-group mb-5 justify-content-center">
                                    <button type="submit" className="btn" style={{ backgroundColor: "#3e2780", color: "#ffffff", padding: "15px" }}>Send OTP</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* here we will call the review component */}



            </section>
            <br />
            <style>
                {`
                @media (max-width: 768px) {
                    .input-group mb-3{
                        width:100%
                    }
                    .row {
                        flex-direction: column;
                    }
                    .col-md-6 {
                        width: 100%;
                    }
                    .banner_img {
                        max-width: 100%; /* Adjust width as needed */
                        height: auto; /* Ensures */}
            `}
            
            </style>
        </>
    );
}

export default FormPage;
