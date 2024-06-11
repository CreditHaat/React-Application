import React, { useState, useEffect } from "react";
import logo2 from '../NewPersonalLoanImages/happy image3.png'
// import './Form.css'
import happyImage from '../NewPersonalLoanImages/happy image3.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaArrowLeft } from 'react-icons/fa';
import AddInfoPageImage from '../NewPersonalLoanImages/AddInfoPageImage.png';
import './AddInfo.css';

function AddInfo({ goToLendersList }) {

    const [step, setStep] = useState(1); // State to track the current step
    const [profession, setProfession] = useState('');
    const [income, setIncome] = useState('');
    const [salaryType, setSalaryType] = useState('');
    const [email, setEmail] = useState('');
    const [pincode, setPincode] = useState(''); // Set initial state to an empty string
    const [touchStartX, setTouchStartX] = useState(0); // State to track touch start position
    const [errorMessage, setErrorMessage] = useState(''); // State to track error message

    useEffect(() => {
        if (profession && income && salaryType && parseInt(income) >= 10000) {
            setErrorMessage('');
            setStep(2);
        } else if (profession && income && salaryType) {
            setErrorMessage('You are not eligible. Income should be 10,000 or greater.');
        }
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
            goToLendersList(); // Move to next step if email, pincode, and no error
        }
    }, [email, pincode, errorMessage, goToLendersList]);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = endX - touchStartX;
        if (deltaX < -50 && step < 2 && profession && income && salaryType && parseInt(income) >= 10000) {
            setStep(step + 1); // Swipe left to go forward
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <>
            <section className="container banner">
                <div className="row py-md-5 px-md-5" style={{ display: "flex" }}>
                    <div className="col-md-6">
                        <div className="row" style={{ display: "flex" }}>
                            {/* < div className="col-md-12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div className="" style={{ width: "49%", float: "left" }}>
                                    <h1
                                        class="banner_title"
                                        style={{
                                            fontFamily: "'Noto Sans'",
                                            fontWeight: "500",
                                            margin: "auto"
                                        }}
                                    >
                                        Start your loan <br /> process by <br /> filling your <br /> details.....
                                    </h1>
                                </div>

                                <div className="text-center" style={{ width: "49%", float: "right" }}>
                                    <figure className="figure">
                                        <img
                                            // src="https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/site-banner-ladypic.png"
                                            src={happyImage}
                                            className="figure-img img-fluid banner_img"
                                            alt="..."
                                            style={{
                                                height: "auto",
                                                width: "100%",
                                                maxWidth: "300px",
                                                margin: "0 auto 1rem",
                                            }}
                                        />
                                    </figure>
                                </div>

                            </div> */}

                                        <img
                                            // src="https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/site-banner-ladypic.png"
                                            src={AddInfoPageImage}
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
                                                value={profession}
                                                onChange={(e) => setProfession(e.target.value)}
                                            >
                                                <option value="">Select Your Profession (अपना पेशा चुनें)</option>
                                                <option value="Salaried">Salaried</option>
                                                <option value="Self Employed">Self Employed</option>
                                                <option value="Business">Business</option>
                                            </select>

                                        </div>


                                        <div className="input-group mb-5">
                                            <input type="text" className="form-control textBox" placeholder="Enter Your Monthly Income (अपनी मासिक आय दर्ज करें)" aria-label="Last Name" aria-describedby="last-name-icon" name="lastName"
                                                value={income}
                                                onChange={(e) => setIncome(e.target.value)}
                                            />

                                        </div>

                                        <div className="input-group mb-2">
                                            <select className="form-select textBox" aria-label="First Name" aria-describedby="first-name-icon"
                                                value={salaryType}
                                                onChange={(e) => setSalaryType(e.target.value)}
                                            >
                                                <option value="">Select Your Salary Type (अपना वेतन प्रकार चुनें)</option>
                                                <option value="cash">Cash</option>
                                                <option value="check">Check</option>
                                                <option value="bank transfer">Bank Transfer</option>
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
                                            <input type="email"  placeholder="Enter Your Email (अपना ईमेल दर्ज करें)" className="form-control" aria-label="Last Name" aria-describedby="last-name-icon"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />

                                        </div>

                                        <div className="input-group mb-5">
                                            <input type="number"  placeholder="Enter Your Office Pincode (अपना पिनकोड दर्ज करें)" className="form-control" aria-label="Last Name" aria-describedby="last-name-icon"
                                                value={pincode}
                                                onChange={(e) => setPincode(e.target.value)}
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
                        {step > 1 && <FaArrowLeft className="arrow-left" onClick={prevStep} />}

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