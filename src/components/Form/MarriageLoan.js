import React, { useState, useEffect, useContext } from 'react';
import gif from '../../images/Untitled_design-removebg-preview-removebg-preview.png';
import Animation from './Animation';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import img from '../../images/Experian.svg';
import { Box,Button,Checkbox,Grid,TextField,Typography,Snackbar,IconButton,} from '@mui/material';
import { styled } from '@mui/material/styles';
import FormFooter from './FormFooter';
import './Basicform.css';
import axios from 'axios';
import { UserContext } from '../../context/ContextFile';
import {  useLocation, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import { Card, CardContent,CardOverflow,AspectRatio } from '@mui/joy';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';



const MarriageLoan = () => {
 // var stgOneHitId=null;
  //var stgTwoHitId=null;
 // var t_experian_log_id=null;
  const [stgOneHitId, setStgOneHitId] = useState(null);
  const [stgTwoHitId, setstgTwoHitId] = useState(null);
  const [t_experian_log_id, sett_experian_log_id] = useState(null);

  const [otpVerificationFailed, setOtpVerificationFailed] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [editingPhoneNumber, setEditingPhoneNumber] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  const [secondsRemaining, setSecondsRemaining] = useState();
  const [otpRequested, setOtpRequested] = useState(false);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [focusSetRef, setFocusSetRef] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error,setError]=useState('');
  const [upotp,setUpotp]=useState('');
  const { updateUser } = useContext(UserContext);
  const navigate=useNavigate();
const location=useLocation();

const cardData = [
  {
    id: 1,
    title: "Deepak",
    profession:"Engineer",
    description: "Applying for a loan from CreditHaat is so easy and hasslefree. The platform helped me avail a loan of ₹5 Lacs within 4 hours!",
    imageUrl: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Deepak.jpeg"
  },
  {
    id: 2,
    title: "Santosh",
    profession:"Business Man",
    description: "I needed funds to deal with an emergency. With CreditHaat I received money in my account within minutes.",
    imageUrl: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Santosh.jpeg"
  },
  {
    id: 3,
    title: "Ekta",
    profession:"Sales executive",
    description: "CreditHaat’s simple application process helped me find the best loan offer. In addition, their helpful loan executives helped me complete the loan application",
    imageUrl: "https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/Ekta.jpeg"
  }
];

const highlights=[
  {
    id:1,
    title:"Personal Loan upto ₹25 lacs"
  },
  {
    id:2,
    title:"Instant Personal Loan upto ₹5 lac"
  },
  {
    id:3,
    title:"Quick Personal Loan upto ₹5 lac"
  },
  {
    id:4,
    title:"Disbursed same day"
  }
];

const pointsData = [
  {
    id: 1,
    title: "Instant Personal Loans",
    point:{
      1:"Loan upto 5 lacs",
      2:"Interest starting 10.99% p.a",
      3:"Salaried, Self-employed, Business owner",
      4:"Disbursed within 4 hours",
      5:"PAN,Aadhar,Income proof"
    }  
  },
  {
    id: 2,
    title: "Personal Loans",
    point:{
      1:"Loan upto 15 lacs",
      2:"Interest starting 10.99% p.a",
      3:"Salaried, Self-employed, Business owner",
      4:"Disbursed within 48 hours"
    }
  },
  {
    id: 3,
    title: "Business Loans",
    point:{
      1:"Loan upto 75 lacs",
      2:"Interest starting 14.99% p.a",
      3:"Business owner",
      4:"Disbursed within 7 days"
    }
  }
];
// Configuration for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    userPhoneNumber: '',
    agreeTerms: '',
  });

  const urllink=location.search?.split('?')[1] || 'null';
 // console.log("Url link:",urllink); 

  
// Split the URL string by '&' to get individual key-value pairs
const keyValuePairs = urllink.split("&");

// Define variables to store the extracted values
let source = null;
let dsa = null;
let channel=null;
let sub_source=null;
let sub_dsa=null;
let phone=null;
let query=null;

// Iterate over each key-value pair
keyValuePairs.forEach(pair => {
  // Split the key-value pair by '=' to get the key and value
  const [key, value] = pair.split("=");

  // Check the key and assign the value to the corresponding variable
  if (key === "source") {
    source = value || null; // Use null if value is empty
  } else if (key === "dsa") {
    dsa = value || null; // Use null if value is empty
  }
  else if (key === "sub_source") {
   sub_source = value || null; // Use null if value is empty
  }
  else if (key === "sub_dsa") {
    sub_dsa = value || null; // Use null if value is empty
  }
  else if (key === "channel") {
    channel = value || null; // Use null if value is empty
  }
  else if (key === "query") {
    query = value || null; // Use null if value is empty
  }
  else if (key === "phone") {
    phone = value || null; // Use null if value is empty
  }

});

//console.log("Source:", source);
//console.log("DSA:", dsa); 

  const handlePhoneNumberChange = (e) => {
    setUserPhoneNumber(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    const inputValue = e.target.value;
  
    // Use a regular expression to check if the input contains only alphabets
    if (/^[a-zA-Z]+$/.test(inputValue) || inputValue === '') {
      const capitalizedFirstName =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      setFirstName(capitalizedFirstName);
      setErrorMessages({ firstName: '' }); // Clear any previous error message
    } else {
      setErrorMessages({ firstName: 'Please enter only alphabets' });
    }
  };
  

  const handleLastNameChange = (e) => {
    const inputValue = e.target.value;
  
    // Use a regular expression to check if the input contains only alphabets
    if (/^[a-zA-Z]+$/.test(inputValue) || inputValue === '') {
      const capitalizedLastName =
        inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      setLastName(capitalizedLastName);
      setErrorMessages({ lastName: '' }); // Clear any previous error message
    } else {
      setErrorMessages({ lastName: 'Please enter only alphabets' });
    }
  };
  
  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  useEffect(() => {
    let countdownInterval;
    if (secondsRemaining > 0 && otpRequested) {
      countdownInterval = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);
      if (!focusSetRef) {
        const firstInput = document.getElementById('otp-input-0');
        if (firstInput) {
          firstInput.focus();
          setFocusSetRef(true);
        }
      }
    }

    return () => {
      clearInterval(countdownInterval);
      if (secondsRemaining === 0) {
        setCountdownFinished(true);
      }
    };
  }, [secondsRemaining, otpRequested]);

  const handleResendOTP = async() => {
    setOtpValues(Array(6).fill(''));
    setSecondsRemaining(59);
    setCountdownFinished(false);
    setOtpRequested(true);
    try {
      const formData1=new FormData();
      formData1.append('userPhoneNumber',userPhoneNumber);
      formData1.append('firstName',firstName);
      formData1.append('lastName',lastName);
      formData1.append('dsa',dsa);
      formData1.append('channel',channel);
      formData1.append('source',source);
      formData1.append('sub_source',sub_source);
      formData1.append('campaign',urllink);
      formData1.append('sub_dsa',sub_dsa);
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}chfronetendotpgenerator`,formData1);
      //`${process.env.REACT_APP_BASE_URL}submit`
      if(response.data.code === 0){

        setStgOneHitId(response.data.obj.stgOneHitId);
        setstgTwoHitId(response.data.obj.stgTwoHitId);
         sett_experian_log_id(response.data.obj.t_experian_log_id);
       
        // console.log("json from resp"+stgOneHitId);
       
        // console.log('Response from backend:', response.data);
       }
      // Handle the response as needed
    //  console.log(response.data);
      // Reset OTP values and start the countdown
      setOtpValues(Array(6).fill(''));
      setSecondsRemaining(59);
      setCountdownFinished(false);
      setOtpRequested(true);
    } catch (error) {
      console.error('Error:', error);
    }

    // Start the countdown immediately
    const countdownInterval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(countdownInterval);
          setCountdownFinished(true);
        }
        return prevSeconds - 1;
      });
    }, 1000);
  };

  const MAX_DIGITS = 6;
  const handleInput = (index) => (e) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index] = value;
      setOtpValues(updatedOtpValues);
  
      // Check if OTP is complete
      const isAllFilled = updatedOtpValues.every((val) => val !== '');
  if(isAllFilled)
  {
    setUpotp(updatedOtpValues.join(''));
  }
      // Enable or disable the "Verify" button based on OTP completeness
      setIsOtpValid(isAllFilled);
  
      if (e.nativeEvent.inputType === 'deleteContentBackward' && index > 0) {
        setTimeout(() => {
          const prevIndex = index - 1;
          const prevInput = document.getElementById(`otp-input-${prevIndex}`);
          if (prevInput) {
            prevInput.focus();
          }
        }, 0);
      } else if (value !== '' && index < MAX_DIGITS - 1) {
        setTimeout(() => {
          const nextIndex = index + 1;
          const nextInput = document.getElementById(`otp-input-${nextIndex}`);
          if (nextInput) {
            nextInput.focus();
          }
        }, 0);
      }
    }
  };
const handleSubmit= async (firstdata)=>{
try{
  
    // Get URL parameters from the current location
    const queryParams = new URLSearchParams(location.search);

    // Retrieve values for the specified parameters
    const channel = queryParams.get('channel') || '';
    const dsa = queryParams.get('dsa') || '';
    const source = queryParams.get('source') || '';
    const subSource = queryParams.get('sub_source') || '';
    const subDsa = queryParams.get('sub_dsa') || '';

sessionStorage.setItem('userPhoneNumber',userPhoneNumber);
const formData = new FormData();
formData.append('userPhoneNumber',userPhoneNumber);
formData.append('firstName',firstName);
formData.append('lastName',lastName);
formData.append('dsa',dsa);
formData.append('campaign',urllink);
formData.append('channel',channel);
formData.append('source',source);
formData.append('sub_source',sub_source);
formData.append('sub_dsa',sub_dsa);
//formData.append('phone',phone);
//formData.append('query',query);



const response = await axios.post(`${process.env.REACT_APP_BASE_URL}chfronetendotpgenerator`, formData);
if(response.data.code === 0){

 setStgOneHitId(response.data.obj.stgOneHitId);
 setstgTwoHitId(response.data.obj.stgTwoHitId);
  sett_experian_log_id(response.data.obj.t_experian_log_id);

 // console.log("json from resp"+stgOneHitId);

 // console.log('Response from backend:', response.data);
}
//console.log('Response from backend:', response.data);
}catch(error){
  console.log('Error:',error)
}
};
const handleVerification = async () => {
  console.log('1st in');
  try {
    // Combine the updated OTP values into a single string
   // const userOTP = updatedOtpValues.join('');
   //console.log(upotp)
    // Create form data to send to the backend
    const formData1 = new FormData();
   // formData.append('userPhoneNumber', upotp); // Assuming you have userPhoneNumber available
   const formData = new FormData();
   formData.append('mobileNumber', userPhoneNumber);
   formData.append('otp', upotp);
  formData.append('stgOneHitId',stgOneHitId);
  formData.append('stgTwoHitId',stgTwoHitId);
  formData.append('t_experian_log_id',t_experian_log_id);
   
   // Send the OTP verification request to the backend
   const response1 = await axios.post(`${process.env.REACT_APP_BASE_URL}verifyOTP`, formData);

   
  
    // Handle the response from the backend
    if (response1.data.code == 0) {
      
      sessionStorage.setItem('userData', JSON.stringify(response1.data.obj));

      const phone=userPhoneNumber;
      const { pan, address1, dob, pincode } = response1.data.obj;
      const userName=pan;
      const date = dob;
      const pin=pincode;const add=address1;
    updateUser({ pan: userName , dob:date, pincode:pin, address:add ,number:phone});
     // console.log('User PAN:', pan);
     // console.log('Address:', address1);
     // console.log('Date of Birth:', dob);
    //  console.log('Pincode:', pincode);
      
    
      // OTP verification successful
     handleCloseSnackbar();
                 
    navigate('/dialog',);
      console.log('OTP verification successful');
    } else if(response1.data.code == -1) {
      console.log(response1.data);
      console.log('Invalid OTP');
      setOtpVerificationFailed(true);
      setOpenSnackbar(true);
      setOtpValues(Array(6).fill(''));
      setFocusSetRef(false);
      
      // Revert border color back to blue after 2 seconds
      setTimeout(() => {
        setOtpVerificationFailed(false);
      }, 3000);
    }

    else if(response1.data.code == -288){
      handleCloseSnackbar();
    }
  } catch (error) {
    console.error('Error:', error);
  }
};



// Rest of your component code...

  const handleClickSendOTP = async() => {

    const errors = {
      firstName: !firstName.trim() ? 'First Name is required' : '',
      lastName: !lastName.trim() ? 'Last Name is required' : '',
      userPhoneNumber: userPhoneNumber.length !== 10 ? 'Mobile Number must be 10 digits' : '',
      agreeTerms: !agreeTerms ? 'You must agree to the terms and conditions' : '',
    };
    // Update error messages
    setErrorMessages(errors);
    // Validation
    if (!firstName.trim() || !lastName.trim() || userPhoneNumber.length !== 10 || !agreeTerms) {
      // Display an error message or handle validation as needed
      console.log('Please fill in all required fields');
      return;
    }
    setOpenSnackbar(true);
    setCountdownFinished(false);
    setSecondsRemaining(59);
    setOtpRequested(true);
    setOtpValues(Array(6).fill(''));
    setFocusSetRef(false);
    const firstdata={firstName,lastName,userPhoneNumber};
    await handleSubmit(firstdata);
   
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const Root = styled('h5')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginLeft: '9.5%',
      fontSize: '16px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '20%',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'end',
      marginTop: '10%',
      fontSize: '30px',
    },
  }));

  return (
    <>
      <div style={{ background: 'linear-gradient(rgb(255 221 157 / 9%), rgb(179 133 240 / 27%))' }}>
        <Animation />
        <section className="container banner" id='containerb'>
          <div className="row" style={{ display: 'flex' }}>
            <div className="col-md-6" style={{ textAlign: 'end' }}>
              <Root
                class="banner_title"
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '800',
                  color: 'rgba(0, 0, 0, 0.57)',
                }}
              >
                <span>
                  {' '}
                  From 'Will You?' to 'I Do!':<br />
                  Wedding Loans made easy
                </span>
              </Root>
              <br/>
              <figure className="figure">
                <img
                  src={gif}
                  className="figure-img img-fluid banner_img"
                  alt="..."
                  style={{
                    marginLeft: 'auto',
                    display: 'block',
                    loading:'lazy',
                    width: '100%',
                    maxWidth: '300px',
                    marginTop: '-20px',
                  }}
                />
              </figure>
              <Carousel responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={5000}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              >
      {highlights.map((highlight) => (
    <Typography key={highlight.id} style={{textAlign:'center'}}>
       &#8226;  {highlight.title}
    </Typography>
  ))}
    </Carousel>   

            </div>
            <div className="col-md-6" style={{ marginTop: '-2px' }}>
              <Box
                sx={{
                  display: 'flex',
                  height: 'auto',
                }}
              >
                <Grid
                  container
                  direction="column"
                  alignItems="left"
                  justifyContent="left"
                  sx={{ height: '100%' }}
                >
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        maxWidth: 600,
                        mx: 'auto',
                        p: 2,
                        borderRadius: '12px',
                      }}
                    >
                      <Typography
                        variant="h6"
                        align="left"
                        style={{
                          fontFamily: 'Raleway',
                          textAlign: 'center',
                          fontSize: '15px',
                          fontWeight: '700',
                        }}
                      >
                        Welcome Onboard!
                      </Typography>
                      <Typography
                        align=""
                        mb={2}
                        style={{
                          textAlign: 'center',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: 'rgba(0, 0, 0, 0.68)',
                        }}
                      >
                        Let’s help you meet up your dream{' '}
                      </Typography>

                      <div>
                        <TextField
                          name="first"
                          fullWidth
                          label="First Name"
                          placeholder="First name"
                          variant="standard"
                          required
                          value={firstName}
                          onChange={handleFirstNameChange}
                        />
                        <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
    {errorMessages.firstName}
  </Typography>
                        <TextField
                          name="last"
                          fullWidth
                          label="Last Name"
                          placeholder="Last Name"
                          variant="standard"
                          required
                          style={{ marginTop: '10px' }}
                          value={lastName}
                          onChange={handleLastNameChange}
                        />
                        <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
    {errorMessages.lastName}
  </Typography>
                        <TextField
                          type="number"
                          name="number"
                          fullWidth
                          label="Mobile Number"
                          placeholder="Enter mobile number"
                          variant="standard"
                          onInput={(e)=>{ e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)}} min={1}
                          style={{
                            WebkitAppearance: 'none',
                            MozAppearance: 'textfield',
                            appearance: 'textfield',
                            marginTop: '10px',
                          }}
                          required
                          value={userPhoneNumber}
                          onChange={handlePhoneNumberChange}
                        />
                        <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
    {errorMessages.userPhoneNumber}
  </Typography>
                        <Typography
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            marginTop: '10px',
                            color: 'rgba(0, 0, 0, 0.46)',
                          }}
                        >
                         
                          OTP will be sent to your number for verification
                        </Typography>
                        <Box>
                          <Typography style={{ color: '#3258DE' }}>
                            <Checkbox
                              checked={agreeTerms}
                              onChange={handleAgreeTermsChange}
                            />
                            <span style={{ color: 'rgba(0, 0, 0, 0.59)' }}>
                              Agree to the{' '}
                            </span>
                           <a href='/terms' style={{textDecoration:'none'}}> terms and conditions</a>
                          </Typography>
                          
                        </Box>
                        <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
    {errorMessages.agreeTerms}
  </Typography>
                        <Button
                          variant="contained"
                          type="submit"
                          style={{
                            width: '100%',
                            backgroundColor: '#9747FF',
                            height: '50px',
                            borderRadius: '15px',
                          }}
                          onClick={() => {
                            handleClickSendOTP();
                            setEditingPhoneNumber(false);
                          }}
                        >
                          Send OTP
                        </Button>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </section>







        <div>
            <p id="mypara" style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.46)', textAlign: 'left', height: '60px', overflowX: 'hidden', overflowY: 'auto', marginTop: 'auto', padding: '15px', fontFamily:'Raleway', fontWeight:'600' ,width:'90%',margin:'auto'}} className="agreepara scroll">
                You hereby consent to CreditHaat being appointed as your authorized representative to receive your Credit Information from Experian for the purpose of accessing credit worthiness and availing pre-approved offers (“End Use Purpose”). You hereby agree to <a href="/experianterms">Terms and Conditions.</a> <br />
                I authorize CreditHaat and its representatives to Call, SMS or communicate via WhatsApp regarding my application. This consent overrides any registration for DNC / NDNC. I confirm I am in India, I am a major and a resident of India and I have read and I accept CreditHaat Privacy Policy Click here to read the <a href="/privacy">PRIVACY POLICY</a>&nbsp;&&nbsp;<a href="/terms">TERMS OF SERVICE</a><br></br>
            
            <span style={{ fontSize: '12px', color: 'rgba(0, 0, 0, 0.46)', textAlign: 'left', height: '60px', overflowX: 'hidden', overflowY: 'auto', padding:'15px', fontFamily:'Raleway', fontWeight:'600' }} className="scroll">
                By agreeing and accepting the terms and conditions set out herein, you provide your express consent to Social Worth Technologies Private Limited to access the credit bureaus and credit information report and credit score. You also hereby irrevocably and unconditionally consent to usage of such credit information being provided by credit bureaus
            </span>
            </p>
        </div>

      
        <div className="credithaat" style={{ width: '90%', fontSize: '12px', textAlign: 'left', lineHeight: '16px', marginTop: '0px', color: '#000', paddingTop: '10px', boxSizing: 'border-box',margin:'auto' }}>
            <b><span style={{ color: 'rgba(0, 0, 0, 0.68)', fontFamily: 'Raleway', fontWeight:'600', padding:'10px' }}>CreditHaat does not charge any fees from the user.</span></b>
        </div>

        <Carousel responsive={responsive}
         autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}

        >
      {pointsData.map((item) => (
    <Card
      data-resizable
      key={item.id}
      sx={{
        width: 343,
        height:270,
        backgroundColor:'#d9d9d987',
        margin:'50px auto',
        // to make the demo resizable
      }} >    
      <br/>
      <CardContent sx={{ maxWidth: '40ch' }}>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'Raleway',fontWeight:600,color:'rgba(0, 0, 0, 0.68)'}}>
              {item.title}
            </Typography>
            <Typography style={{fontFamily:'Raleway',fontWeight:600,fontSize:'12px'}}>
              {item.point && (
                 <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {Object.values(item.point).map((point, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                          <span style={{ marginRight: '0.5rem' }}><ArrowCircleRightIcon/></span> {point}
                    </li>
                        ))}
                  </ul>
               )}
             </Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>

          <div id="divbtm" style={{ width: '90%', fontFamily:'Raleway', fontSize: '12px',fontWeight:'600', textAlign: 'left', lineHeight: '16px', marginTop: '5px', paddingTop: '10px', paddingBottom: '15px', boxSizing: 'border-box', borderRadius: '16px', backgroundColor: 'rgba(158, 153, 45, 0.21)', color: 'rgba(0, 0, 0, 0.57)', padding:'10px',margin:'auto' }}>
            A sample loan calculation <b>for ₹1,00,000 borrowed for 1 year, with interest rate @13% per annum*, is as provided below:</b> <br />
            Processing fee (@ 2%) = ₹2,000 + GST = ₹2,360 <br />
            Interest = ₹7,181 <br />
            EMI = ₹8,932 <br />
            Total amount to be repaid after a year = ₹1,10,129/- <br />
            *Interest Rate varies based on your risk profile <br />
            The maximum Annual Interest Rate (APR) can go up to 36%
        </div>   


        <Carousel responsive={responsive}>
      {cardData.map((item) => (
    <Card
      data-resizable
      key={item.id}
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        width: 343,
        height:330,
        
        margin:'30px auto',
        // to make the demo resizable
        overflow: 'auto',
       
        '--icon-size': '100px',
      }} >
         <CardOverflow variant="solid" color="warning" sx={{ backgroundColor: '#f68818' }}>
        <AspectRatio
          variant="outlined"
          color="warning"
          ratio="1"
          sx={{
            m: 'auto',
            transform: 'translateY(50%)',
            borderRadius: '50%',
            width: 'var(--icon-size)',
            boxShadow: 'sm',
            bgcolor: 'background.surface',
            position: 'relative',
          }}
        >
           <img
            src={item.imageUrl}
            loading="lazy"
            alt="logo"
          />
        </AspectRatio>
      </CardOverflow>  
      <br/>
      <CardContent sx={{ maxWidth: '40ch' }}>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography style={{color:'blueviolet'}}>
              {item.profession}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
        
                     

        <div className="" style={{ margin: 'auto' }}>
                <h5 style={{ color: 'rgba(0, 0, 0, 0.68)', marginTop: '15px', textAlign:'center', fontFamily:'Raleway', fontWeight:'600'}}>45+ Partner lenders including</h5>
            </div>

            <div className="lenders">
            <div style={{ marginTop: '15px' }}>
                <div className="brandcontainer" style={{ display: 'flex', height: 'auto', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
                    <div className="brandbox" style={{ width: '80px', height: '80px', margin: '10px', textAlign: 'center' }}>
                        <img style={{ height: '50px', width: '50px', margin: 'auto', borderRadius: '2px' }} src="https://chdocsusers.s3.ap-south-1.amazonaws.com/partners/yes_bank_logo.png" alt="Yes Bank" />
                        <p className="brandname" style={{ fontSize: '10px', textAlign:'center',fontFamily:'Raleway',fontWeight:'600' }}>Yes Bank</p>
                    </div>

                    <div className="brandbox" style={{ margin: '20px' }}>
                        <img style={{ height: '50px', width: '50px', margin: 'auto', borderRadius: '2px' }} src="https://chdocsusers.s3.ap-south-1.amazonaws.com/partners/ABFL.png" alt="ABFL" />
                        <p className="brandname" style={{ fontSize: '10px', textAlign:'center',fontFamily:'Raleway',fontWeight:'600' }}>ABFL</p>
                    </div>

                    <div className="brandbox" style={{ margin: '20px' }}>
                        <img style={{ height: '50px', width: '50px', margin: 'auto', borderRadius: '2px' }} src="https://chdocsusers.s3.ap-south-1.amazonaws.com/partners/fibe.png" alt="Fibe" />
                        <p className="brandname" style={{ fontSize: '10px', textAlign:'center',fontFamily:'Raleway',fontWeight:'600' }}>Fibe</p>
                    </div>

                        <div className="brandbox" style={{ margin: '20px' }}>
                            <img style={{ height: '50px', width: '50px', margin: 'auto', borderRadius: '2px' }} src="https://chdocsusers.s3.ap-south-1.amazonaws.com/partners/smartcoin.jpg" alt="Smartcoin" />
                            <p className="brandname" style={{fontSize: '10px', textAlign:'center',fontFamily:'Raleway',fontWeight:'600'}}>Smartcoin</p>
                        </div>

                        <div className="brandbox" style={{ margin: '20px' }}>
                            <img style={{ height: '50px', width: '50px', margin: 'auto', borderRadius: '2px' }} src="https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/MoneyView.webp" alt="Moneyview" />
                            <p className="brandname" style={{fontSize: '10px', textAlign:'center',fontFamily:'Raleway',fontWeight:'600'}}>Moneyview</p>
                        </div>

                        <div className="brandbox" style={{ margin: '20px' }}>
                            <img style={{ height: '50px', width: '50px', margin: 'auto', borderRadius: '2px' }} src="https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/StashFin.webp" alt="Stashfin" />
                            <p className="brandname" style={{fontSize: '10px', textAlign:'center',fontFamily:'Raleway',fontWeight:'600'}}>Stashfin</p>
                        </div>

                        <div className="brandbox" style={{ margin: '20px' }}>
                            <img style={{ height: '50px', width: '50px', margin: 'auto', borderRadius: '2px' }} src="https://chdocsusers.s3.ap-south-1.amazonaws.com/partners/kreditbee.png" alt="Kreditbee" />
                            <p className="brandname" style={{fontSize: '10px', textAlign:'center',fontFamily:'Raleway',fontWeight:'600'}}>Kreditbee</p>
                        </div>

                        <div className="brandbox" style={{ margin: '20px' }}>
                            <img style={{ height: '50px', width: '50px', margin: 'auto', borderRadius: '2px' }} src="https://chdocsusers.s3.ap-south-1.amazonaws.com/partners/zype.png" alt="Zype" />
                            <p className="brandname" style={{fontSize: '10px' , textAlign:'center',fontFamily:'Raleway',fontWeight:'600'}}>Zype</p>
                        </div>

                        <div className="brandbox" style={{ margin: '20px' }}>
                            <img style={{ height: '50px', width: '50px', margin: 'auto', borderRadius: '2px' }} src="https://credithaatimages.s3.ap-south-1.amazonaws.com/siteimages/MoneyTap.webp" alt="Moneytap" />
                            <p className="brandname" style={{fontSize: '10px', textAlign:'center',fontFamily:'Raleway',fontWeight:'600'}}>Moneytap</p>
                        </div>

                        

                    </div>

                    <div className="brandbox" style={{ display: 'flex', justifyContent: 'center', width: 'auto', height: 'auto', color: 'blue', cursor: 'pointer' }} onClick={() => window.location.href='/lending'}>
                        <p className="brandname" style={{fontSize: '10px',fontFamily:'Raleway',fontWeight:'600'}}>VIEW ALL...</p>
                    </div>

                </div>
            </div>

            <div className="label svelte-f96fbw" style={{ border: 'none', width: '100%', textAlign: 'center', marginTop: '10px',fontFamily:'Raleway',fontWeight:'600' }}>
            Bureau partner
        </div>
        <img style={{ height: '50px', width: '120px', margin: 'auto', borderRadius: '2px', display:'flex', marginTop: '20px' }} src={img} alt="" />

         
        <h5 style={{textAlign:'center',fontFamily:'Raleway',marginTop:'10px',fontWeight:'600'}}>About us</h5>
        <p id="mypara" style={{ fontSize: '12px', marginBottom:'10px', color: 'rgba(0, 0, 0, 0.46)', textAlign: 'left', height: '60px', overflowX: 'hidden', overflowY: 'auto', marginTop: 'auto', padding: '15px', fontFamily:'Raleway', fontWeight:'600' ,width:'90%',margin:'auto'}} className="agreepara scroll"><a href="/" style={{textDecoration:'none'}}>CreditHaat</a>
        &nbsp;is a loan aggregator that helps users to find the best loan offers from a range of lender options. CreditHaat has partnered with 45+ lending partners that can help users of all profiles avail loans from Rs.5000 to Rs.50Lac. CreditHaat accepts user’s profile information and runs its analytics engine to match them with the best fit lender for the user’s credit needs. In addition CreditHaat helps the user completes the loan application through guided support making the entire loan process seamless and convenient. 

CreditHaat allows users to avail Unsecured Personal Loans, Unsecured Business Loans, Gold Loans, Home Loans, LAP, unsecured and secured credit cards. 

CreditHaat thus functions as a single gateway for a user to meet their borrowing objectives. The team is based in Pune, Maharashtra and is one of the fastest growing digital aggregators of financial services.
                     </p>



        {/* Snackbar for OTP verification */}
        <Snackbar
          open={openSnackbar}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'center', horizontal: 'middle' }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              padding: '20px',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <div>
                <Typography variant="h6" align="left" style={{ marginBottom: '10px' }}>
                  Enter OTP
                </Typography>
                <Typography variant="subtitle1" align="left">
                  OTP sent to {editingPhoneNumber ? (
                    <TextField
                      type="number"
                      name="number"
                      onInput={(e)=>{ e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)}} min={1}
                      value={userPhoneNumber}
                      onChange={(e) => setUserPhoneNumber(e.target.value)}
                      variant="outlined"
                      size="small"
                      style={{ width: '120px' }}
                    />
                  ) : (
                    <span>{userPhoneNumber}</span>
                  )}
                </Typography>
              </div>
              <div>
                <IconButton onClick={() => setEditingPhoneNumber(!editingPhoneNumber)}>
                  {editingPhoneNumber ? <SaveIcon /> : <EditIcon />}
                </IconButton>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                overflowX: 'auto',
              }}
            >
              {otpValues.map((value, index) => (
                <TextField
                  key={index}
                  id={`otp-input-${index}`}
                  variant="outlined"
                  size="small"
                  className="otp-input" // Add this class
    style={{ width: '60px', margin: '5px', textAlign: 'center', border: otpVerificationFailed ? '2px solid red' : '' }}

                  inputProps={{
                    maxLength: 1,
                    style: { textAlign: 'center' },
                    inputMode: 'numeric',
                  }}
                  value={value}
                  onChange={handleInput(index)}
                />
              ))}
            </div>
            <Typography style={{ color: 'red', marginTop: '5px' }}>
  {otpVerificationFailed ? 'Incorrect OTP' : ''}
</Typography>
            <Typography style={{ marginTop: '10px' }}>
              {countdownFinished ? (
                <Button
                  variant="text"
                  style={{ color: 'blue', cursor: 'pointer' }}
                  onClick={() => {
                    handleResendOTP();
                    setEditingPhoneNumber(false);
                  }}
                >
                  Resend OTP
                </Button>
              ) : (
                secondsRemaining > 0 ? (
                   `Resend OTP in ${secondsRemaining} sec`
                ) : (
                  <Button
                    variant="text"
                    style={{ color: 'blue', cursor: 'pointer' }}
                    onClick={() => {
                      handleResendOTP();
                      setEditingPhoneNumber(false);
                    }}
                  >
                    Resend OTP
                  </Button>
                )
              )}
            </Typography>             
            <Button variant="contained" disabled={!isOtpValid} style={{ width: '100%', marginTop: '10px' }} onClick={handleVerification} > 
              Verify
            </Button>
          </div>
        </Snackbar>
        
        <style>
          {`
            @media (max-width: 768px) {
              .input-group mb-3{
                 width:100%
              }
  
              .banner_title{
                font-size:20px;
                margin-top:20%;
              }
               
              .row {
                flex-direction: column;
              }
              .col-md-6 {
                width: 100%;
              }
              .banner_img {
                max-width: 100%;
                height: 200px;
                margin: 1rem auto;
              }
            }
          `}
        </style>
        <br/>
        <FormFooter />
      </div>
    </>
  );
};

export default MarriageLoan;