import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './OTPVerification.css';
import { type } from '@testing-library/user-event/dist/type';

function OTPVerification({verifyOTP}) {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('OTP submitted: ' + otp.join(""));
    // Check OTP here and redirect if successful
    // For demonstration, let's assume OTP verification is successful
    // Replace the condition with your actual OTP verification logic
    if (otp.join("") === "123456") {
      // Redirect to AddInfo.js upon successful OTP verification
      window.location.href = '/add-info'; // You can use <Link> component if within BrowserRouter
    }
  };

  return (
    <div className="otp-container">
      <h2>Fill OTP (ओटीपी भरें)</h2>
      <p className="terms-text">
          Please enter the 6 digit code sent to your mobile number for verification.
          <br></br>कृपया सत्यापन के लिए आपके मोबाइल नंबर पर भेजा गया 6 अंकों का कोड दर्ज करें।
        </p>
      <form onSubmit={handleSubmit}>
        <div className="otp-inputs">
          {otp.map((data, index) => {
            return (
              <input
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        {/* <div className="button-container">
          {/* Instead of a regular button, use Link for redirection 
          <Link to="/NewPersonalLoan/AddInfo" className="verify-button">Verify</Link>
        </div> */}

        <button onClick={verifyOTP} className="button-container verify-button" >Verify</button>

      </form>
    </div>
  );
}

export default OTPVerification;
