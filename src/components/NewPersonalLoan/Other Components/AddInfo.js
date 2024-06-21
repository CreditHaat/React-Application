import React, { useState, useEffect } from "react";
import logo2 from '../NewPersonalLoanImages/happy image3.png'
// import './Form.css'
import happyImage from '../NewPersonalLoanImages/happy image3.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaArrowLeft } from 'react-icons/fa';
import AddInfoPageImage from '../NewPersonalLoanImages/AddInfoPageImage.png';
// import AddInfoPageImg from '../NewPersonalLoanImages/AddInfoPageImg.png';
import './AddInfo.css';
import AddInfoPageImg from '../NewPersonalLoanImages/AddInfoPageImage.png';

function AddInfo({ handleAddInfoFormSubmit , handleAddInfoFormSubmit2, profession1, income1, salaryType1, setProfession1, setIncome1, setSalaryType1, email1, pincode1, setEmail1, setPincode1, goToLendersList }) {

    const [step, setStep] = useState(1); // State to track the current step
    const [profession, setProfession] = useState('');
    const [income, setIncome] = useState('');
    const [salaryType, setSalaryType] = useState('');
    const [email, setEmail] = useState('');
    const [pincode, setPincode] = useState(''); // Set initial state to an empty string
    const [touchStartX, setTouchStartX] = useState(0); // State to track touch start position
    const [errorMessage, setErrorMessage] = useState(''); // State to track error message

    useEffect(() => {
        // Adjusted logic to prevent premature step change on income field change
        let timer;
        if (income && parseInt(income) >= 0 && profession && salaryType) {
            timer = setTimeout(() => {
                const syntheticEvent = {
                    preventDefault: () => {},
                    // Add other properties as needed
                };
                handleAddInfoFormSubmit(syntheticEvent);
                setStep(2);
            }, 500); // Adjust delay as needed
        }
        return () => clearTimeout(timer); // Cleanup on unmount or change
    }, [profession, income, salaryType]);

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            setErrorMessage('Invalid email address');
        } else {
            setErrorMessage('');
        }
    }, [email]);

    useEffect(() => {
        const pincodeRegex = /^[1-9][0-9]{5}$/;
        if (pincode && !pincodeRegex.test(pincode)) {
            setErrorMessage(prevErrorMessage => prevErrorMessage ? prevErrorMessage : 'Invalid pincode');
        } else {
            setErrorMessage(prevErrorMessage => prevErrorMessage === 'Invalid pincode' ? '' : prevErrorMessage);
        }
    }, [pincode]);

    

    useEffect(() => {
        if (email && pincode && !errorMessage && pincode.length === 6) {
            const syntheticEvent = {
                preventDefault: () => {},
                // Add other properties as needed
            };
            handleAddInfoFormSubmit2(syntheticEvent);
            
            goToLendersList(); // Move to next step if email, pincode, and no error
        }
    }, [email, pincode, errorMessage, goToLendersList]);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = endX - touchStartX;
        if (deltaX < -50 && step < 2 && profession && income && salaryType && parseInt(income) >= 0) {
            setStep(step + 1); // Swipe left to go forward
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleInputChange = (value, fieldName) => {
        // Check if the previous field is filled before accepting input for the current field
        switch (fieldName) {
            case 'income':

                if (!profession) {
                    setErrorMessage('Please fill the profession field first.');
                    return;
                }
                break;
                

                
            case 'salaryType':
                if (!income) {
                    setErrorMessage('Please fill the income field first and provide valid income');
                    return;
                }
                setSalaryType(value);


                setErrorMessage('');
                break;

            case 'pincode':
                    if (!email) {
                        setErrorMessage('Please fill the email field first.');
                        return;
                    }
                    break;
            default:
                break;
        }

        // If previous field is filled, update the state and clear error message
        switch (fieldName) {
            case 'profession':
                setProfession(value);
                setProfession1(value)
                
                // setFormData(prevFormData => [...prevFormData, {
                //     'profession': value
                // }]);

                
                    // formData({
                        
                    //     profession : value
                    // })
                
                setErrorMessage('');
                break;
            case 'income':
                setIncome(value);
                setIncome1(value);

                setErrorMessage('');
                break;
            case 'salaryType':
                setSalaryType(value);
                setSalaryType1(value);

                setErrorMessage('');
                break;
                case 'email':
                    setEmail(value);
                    setEmail1(value);
                    break;
                case 'pincode':
                    setPincode(value);
                    setPincode1(value);
                    break;           
            default:
                break;
        }
    };

    return (
        <>
            <section className="container banner" style={{borderRadius: '20px', marginTop: '10px', backgroundColor: '#f2edff' }}>
                <div className="row py-md-5 px-md-5" style={{ display: "flex" }}>
                    <div className="col-md-6">
                        <div className="row" style={{ display: "flex" }}>
                            

                                        <img
                                            // src="https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/site-banner-ladypic.png"
                                            src={AddInfoPageImg}
                                            className="figure-img img-fluid banner_img"
                                            alt="..."
                                            
                                        />

                        </div>
                    </div>


                    <div className="col-md-6 py-md-5 px-md-5" style={{ justifyContent: "center", alignItems: "center" }}>
                        <div className="slide-container">{/* This div is also used for slide  */}
                            {step === 1 && (
                                <div>
                                    {/* From Here We will add the form Contents which should slide after filling all the details */}
                                    <div className="row" style={{ display: "flex" }}>
                                        <div className="input-group mb-5">
                                            <select className="form-select textBox" aria-label="First Name" aria-describedby="first-name-icon"
                                                value={profession && profession1}
                                                onChange={(e) => handleInputChange(e.target.value, 'profession')}
                                            >
                                                <option value="">Select Your Profession </option>
                                                <option>Salaried</option>
                                                <option value="Self Employed">Self Employed</option>
                                                <option value="Business">Business</option>
                                            </select>

                                        </div>


                                        <div className="input-group mb-5">
                                            <input type="number" className="form-control textBox" placeholder="Enter Your Monthly Income" aria-label="Last Name" aria-describedby="last-name-icon" name="lastName"
                                                value={income && income1}
                                                onChange={(e) => handleInputChange(e.target.value, 'income')}
                                            />

                                        </div>

                                        <div className="input-group mb-2">
                                            <select className="form-select textBox" aria-label="First Name" aria-describedby="first-name-icon"
                                                value={salaryType && salaryType1}
                                                onChange={(e) => handleInputChange(e.target.value, 'salaryType')}
                                            >
                                                <option value="">Select Your Salary Type</option>
                                                <option value="0">Cash</option>
                                                <option value="1">Check</option>
                                                <option value="2">Bank Transfer</option>
                                            </select>
                                        </div>


                                    </div>
                                    {/* Form content ends here */}
                                </div>
                            )}

                            {/* Here we will write the code for second form */}

                            {step === 2 && (
                                <div>

                                    {/* From here we will add the content for second form */}
                                    <div className="row" style={{ display: "flex" }}>

                                        <div className="input-group mb-5">
                                            <input type="email"  placeholder="Enter Your Email" className="form-control" aria-label="Last Name" aria-describedby="last-name-icon"
                                                value={email}
                                                onChange={(e) => handleInputChange(e.target.value, 'email')}
                                            />

                                        </div>

                                        <div className="input-group mb-5">
                                            <input type="number"  placeholder="Enter Your Office Pincode" className="form-control" aria-label="Last Name" aria-describedby="last-name-icon"
                                                value={pincode}
                                                onChange={(e) => handleInputChange(e.target.value, 'pincode')}
                                                
                                            />

                                        </div>

  
                                    </div>
                                    {/* Content for second form ends here */}

                                </div>
                            )}

                        </div>
                        <div className="dot-container">
                            <span className={`dot ${step === 1 ? 'active' : ''}`}></span>
                            <span className={`dot ${step === 2 ? 'active' : ''}`}></span>
                        </div>
                        {errorMessage && <div className="text-danger">{errorMessage}</div>}
                        {step > 1 && <FaArrowLeft className="arrow-left" style={{marginBottom:'30px'}} onClick={prevStep} />}
                        
                    </div>



                </div>
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
              height: auto; /* Ensures image does not distort */
              margin: 1rem auto; /* Adds some space around the image */
            }
          }
        `}
            </style>
        </>
    );

}

export default AddInfo;