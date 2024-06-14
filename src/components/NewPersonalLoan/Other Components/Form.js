import React, { useState } from "react";
import logo2 from '../NewPersonalLoanImages/happy image3.png'
import './Form.css'
import happyImage from '../NewPersonalLoanImages/happy image3.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import formPageImage from '../NewPersonalLoanImages/Form Page Image.png';
import formPageImage2 from '../NewPersonalLoanImages/FormPageImage.png'

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

    return (
        <>
            <section className="container banner">
                <div className="row py-md-5 px-md-5" style={{ display: "flex" }}>
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

                        <img src={formPageImage2} className="figure-img img-fluid banner_img" alt="..." />

                    </div>
                    <div className="col-md-6 py-md-5 px-md-5" style={{ justifyContent: "center", alignItems: "center" }}>
                        <div className="row" style={{ display: "flex" }}>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-5">
                                    <input type="text" className={`form-control textBox ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First Name" aria-label="First Name" aria-describedby="first-name-icon" name="firstName" value={formData.firstName || ''} onChange={handleChange} />
                                    <span className="input-group-text" id="first-name-icon"><i className="bi bi-person"></i></span>
                                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                </div>
                                <div className="input-group mb-5">
                                    <input type="text" className={`form-control textBox ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Last Name" aria-label="Last Name" aria-describedby="last-name-icon" name="lastName" value={formData.lastName || ''} onChange={handleChange} />
                                    <span className="input-group-text" id="last-name-icon"><i className="bi bi-person"></i></span>
                                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                </div>
                                <div className="input-group mb-2">
                                    <input type="number" className={`form-control textBox ${errors.mobileNumber ? 'is-invalid' : ''}`} placeholder="Mobile Number" aria-label="Mobile Number" aria-describedby="mobile-number-icon" name="mobileNumber" value={formData.mobileNumber || ''} onChange={handleChange} />
                                    <span className="input-group-text" id="mobile-number-icon"><i className="bi bi-phone"></i></span>
                                    {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
                                </div>
                                <div className="input-group mb-2 text-center">
                                    <p className="terms-text" style={{ padding: "15px" }}>
                                        By clicking "Send OTP" button, you agree to our <a href="/terms">Terms and Conditions</a>
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
