import React, { useState, useEffect } from 'react';
import './OTPVerification.css';

function OTPVerification({ verifyOTP, handleOtpChange, upotp, otpStatus}) {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;

    // If backspace is pressed or input is numeric
    if (e.keyCode === 8 || !isNaN(value)) {
      let newOtp = [...otp];

      // If backspace is pressed and the input field is empty
      if (e.keyCode === 8 && value === "" && index !== 0) {
        // Move focus to previous input field
        document.getElementsByName("otp")[index - 1].focus();
        // Clear the value of current input field
        newOtp[index - 1] = "";
      } else if (index >= 0 && index < 6) {
        // If input is numeric and index is within range
        newOtp[index] = value;
        // Move focus to next input field
        if (index < 5 && value !== "") {
          document.getElementsByName("otp")[index + 1].focus();
        }
      }

      setOtp(newOtp);

      //This code is for automatically rendering next page when otp is verified from backend

      // const enteredOTP = newOtp.join("");
      // if (enteredOTP.length === 6) {
      //   // Check if entered OTP is correct (for demonstration purposes)
      //   verifyOTP();
      // }

      //-------------------------------------------------------------------------------
    
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOTP = otp.join("");

    alert('OTP submitted: ' + enteredOTP);

    // Check OTP here and redirect if successful
    // if (enteredOTP === "123456") {
    //   window.location.href = '/add-info'; // Redirect upon successful OTP verification
    // }
  };

    const resetOtp = () => {
    setOtp(new Array(6).fill(""));
  };

  useEffect(() => {
        if (otpStatus === "Incorrect OTP! Try Again..") {
          resetOtp();
        }
      }, [otpStatus]);

  return (
    <div className="otp-container">
      <h2>Fill OTP</h2>
      <h4 style={{paddingLeft:'0px'}} className="terms-text">Please enter the 6 digit code sent <br></br>to your mobile number for verification.</h4>
      <form style={{textAlign:'center'}} onSubmit={handleSubmit}>
        <div style={{textAlign:'center'}} className="otp-inputs">
          {otp.map((data, index) => (
            <input
              type="number"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleChange(e, index)}
            />
          ))}
        </div>

            {handleOtpChange(otp.join(''))}
            <p style={{color:'red', textAlign:'center'}}>{otpStatus}</p>

        <button  onClick={verifyOTP} className="button-container  verify-button">Verify</button>
      </form>
    </div>
  );
}

export default OTPVerification;