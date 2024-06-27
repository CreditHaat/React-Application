import React, { useState, useRef } from 'react';

const OTPBottomSheet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleOtpChange = (e, index) => {
    let value = e.target.value;

    // Handle backspace to clear the current input box and focus on the previous one
    if (e.nativeEvent.inputType === 'deleteContentBackward' || value === '') {
      const newOtp = [...otp];
      newOtp[index] = ''; // Clear the current input box
      setOtp(newOtp);

      // Focus on the previous input if not the first one
      if (index > 0) {
        setTimeout(() => {
          inputRefs.current[index - 1].focus();
        }, 0); // Use setTimeout to ensure focus happens after the value is cleared
      }

      return;
    }

    // Handle input for OTP
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input
      if (index < otp.length - 1) {
        setTimeout(() => {
          inputRefs.current[index + 1].focus();
        }, 0); // Use setTimeout to ensure focus happens after the value is set
      }
    } else if (value.length > 1) {
      // Handle cases where pasting multiple characters (e.g., from clipboard)
      value = value.slice(-1); // Keep only the last character if more than one is pasted
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input if available
      if (index < otp.length - 1) {
        setTimeout(() => {
          inputRefs.current[index + 1].focus();
        }, 0); // Use setTimeout to ensure focus happens after the value is set
      }
    }
  };

  const handleSubmitOtp = () => {
    const otpValue = otp.join('');
    console.log('Submitted OTP:', otpValue);
    // Add your OTP submission logic here
  };

  const bottomSheetStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-out',
    transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
    padding: '20px', // Add padding for better layout
    textAlign: 'center', // Center align content
  };

  const inputStyle = {
    width: '40px',
    height: '40px',
    margin: '0 5px',
    fontSize: '20px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <>
      <button onClick={toggleVisibility}>Show OTP Bottom Sheet</button>
      <div style={bottomSheetStyle}>
        <p>Enter OTP</p>
        <div>
          {otp.map((data, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleOtpChange(e, index)}
              onFocus={(e) => e.target.select()}
              style={inputStyle}
            />
          ))}
        </div>
        <button onClick={handleSubmitOtp} style={buttonStyle}>
          Submit OTP
        </button>
      </div>
    </>
  );
};

export default OTPBottomSheet;
