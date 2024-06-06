import React, { useContext, useState,useEffect ,useRef,createRef} from 'react'
import gif from '../../images/undraw_Personal_file_re_5joy-removebg-preview 1.png';
import Animation from './Animation';
import { Box, Button,Grid,TextField, Typography } from '@mui/material';
import FormFooter from './FormFooter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './Root.css';
import './Basicform.css';
import { UserContext } from '../../context/ContextFile';
import axios from 'axios';


const SecondPage = () => {
 // const [mobileNumber, setMobileNumber] = useState(['', '', '', '', '', '', '', '', '', '']);
 // const mobileNumberRefs = useRef(Array(10).fill(null).map(() => createRef()));
 // const [mobileNumber, setMobileNumber] = useState('');
 // const mobileNumberRef = useRef([]);
  const [pan, setPan] = useState('');
  const [dob, setDob] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const { user, updateUser } = useContext(UserContext);
  const [editedName, setEditedName] = useState(user ? user.pan : '');
  const [editedName1, setEditedName1] = useState(user ? user.dob : '');
  const [editedName2, setEditedName2] = useState(user ? user.pincode : '');
  const [editedName3, setEditedName3] = useState(user ? user.address : '');
  const [errorMessages, setErrorMessages] = useState({
    pan: '',
    dob: '',
    pincode: '',
    address: '',
  });

 /* useEffect(() => {
    const storedUserData = sessionStorage.getItem('userData');
    const mydata = JSON.parse(storedUserData);
//console.log("goi"+mydata.pan);
    // Extract the mobile number from session storage
    const mobileNumberFromSession = mydata?mydata.pan:'';
    console.log("goi",mobileNumberFromSession );
    if (mobileNumberFromSession) {
      // Check if the first six digits are 'XXXXXX'
      const isFirstSixDigitsX = mobileNumberFromSession.startsWith('XXXXXX');

      if (isFirstSixDigitsX) {
        // Set last four digits and keep the first six digits as blank
        setMobileNumber([...Array(6).fill(''), ...mobileNumberFromSession.slice(-4)]);
      } else {
        // Set digits as they are, replacing null with an empty string
        setMobileNumber(mobileNumberFromSession.split('').map((digit) => digit || ''));
      }
    }

    // ... (rest of the useEffect logic)
  }, [user]);*/

  useEffect(() => {
    
   
   /* setEditedName(user ? user.pan : ''); // Ensure editedName is synced with user's PAN
    setPan(user ? user.pan : ''); 
    // Ensure pan state is also synced with user's PAN
    setEditedName1(user && user.dob ? user.dob.split('-').reverse().join('-') : ''); // Reverse the date format for display if user and user.dob are not null
    setDob(user && user.dob ? user.dob.split('-').reverse().join('-') : ''); // Reverse the date format for display if user and user.dob are not null
    setEditedName2(user ? user.pincode : '');
    setPincode(user ? user.pincode:'');
    setEditedName3(user ? user.address : '');
    setAddress(user ? user.address:'');
  }, [user]);*/
  const storedUserData = sessionStorage.getItem('userData');
  const mydata = JSON.parse(storedUserData);

  // Update state based on mydata
  setEditedName(mydata ? mydata.pan : '');
  setPan(mydata ? mydata.pan : '');
  setEditedName1(mydata && mydata.dob ? mydata.dob.split('-').join('-') : '');
  setDob(mydata && mydata.dob ? mydata.dob.split('-').join('-') : '');
  setEditedName2(mydata ? mydata.pincode : '');
  setPincode(mydata ? mydata.pincode : '');
  setEditedName3(mydata ? mydata.address1 : '');
  setAddress(mydata ? mydata.address1 : '');
}, [user]);
const navigate=useNavigate();

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'pan':
        setPan(value.toUpperCase());
        break;
      case 'dob':
        const numericValue = value.replace(/[^0-9]/g, '').slice(0, 8);

        // Format the date with dashes based on the entered digits
        const formattedDate = numericValue.replace(/(\d{4})(\d{0,2})?(\d{0,2})?/, (match, p1, p2, p3) => {
          let result = `${p1}`;
          if (p2 && p2.length > 0) result += `-${p2}`;
          if (p3 && p3.length > 0) result += `-${p3}`;
          return result;
        });
  
        setDob(formattedDate);
        break;
      case 'pincode':
        setPincode(value);
        break;
      case 'address':
        setAddress(value);
        break;
      default:
        break;
    }
  };
 /* const handleMobileNumberChange = (index, value) => {
    const newMobileNumber = [...mobileNumber];
    newMobileNumber[index] = value;

    // Move focus to the next input or stay on the current one
    if (index < 9 && value !== '') {
      mobileNumberRefs.current[index + 1].current.focus();
    }
    if (value === '' && index > 0) {
      mobileNumberRefs.current[index - 1].current.focus();
    }
    setMobileNumber(newMobileNumber);
  };

  useEffect(() => {
    mobileNumberRefs.current.forEach((ref, index) => {
      ref.current.addEventListener('keydown', (event) => {
        const { key, target } = event;
        const value = target.value;
  
        if (key === 'Backspace' && value === '' && index > 0) {
          mobileNumberRefs.current[index - 1].current.focus();
        }
      });
    });
  }, []);*/
  const handleVerification = async () => {
    
    try {
     
  
    
      const formData1 = new FormData();
     // formData.append('userPhoneNumber', upotp); // Assuming you have userPhoneNumber available
    // const no=user ? user.number : '';
    const no=sessionStorage.getItem('userPhoneNumber');
     const formData = new FormData();
     formData.append('pan', pan);
     formData.append('dob', dob);
     formData.append('pincode', pincode);
     formData.append('address', address);
     formData.append('userPhoneNumber',no);
     // Send the OTP verification request to the backend
     const response1 = await axios.post(`${process.env.REACT_APP_BASE_URL}secondpage`, formData);
  
     
   //  sessionStorage.setItem('userData', JSON.stringify(response1.data.obj));
   if (response1.data.obj !== null) {
    sessionStorage.setItem('userData', JSON.stringify(response1.data.obj));
  }
      // Handle the response from the backend
     
    } catch (error) {
      console.error('Error:', error);
    }
  };
     
  const validation = () => {
    updateUser({ ...user, pan: pan },
      {...user,dob:dob},
      {...user,pincode:pincode},
      {...user,address:address}
      ); // Update the user context with the modified PAN
    const errors = {
      pan: !pan || !pan.trim() ? 'PAN is required' :
      !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan) ? 'Invalid PAN format' : '',
 
      dob: !dob || !dob.trim() ? 'Date of Birth is required' : '',
      pincode:!pincode || !pincode.trim() ? 'Pincode is required' : pincode.length !== 6 ? 'Pincode must be 6 digits' : '',

      address:!address || !address.trim() ? 'Address is required' : '',
    };
    
    if (!errors.dob) {
      // Check age between 19-60
      const currentDate = new Date();
      const enteredDate = new Date(dob);
      const age = currentDate.getFullYear() - enteredDate.getFullYear();
  
  // Calculate if the user has turned 19 yet
  const isAbove19 = age > 19 || (age === 19 && currentDate.getMonth() > enteredDate.getMonth()) || (age === 19 && currentDate.getMonth() === enteredDate.getMonth() && currentDate.getDate() >= enteredDate.getDate());

  // Calculate if the user's age is not above 60
  const isBelow60 = age <= 60 || (age === 60 && currentDate.getMonth() < enteredDate.getMonth()) || (age === 60 && currentDate.getMonth() === enteredDate.getMonth() && currentDate.getDate() < enteredDate.getDate());

  if (!isAbove19 || !isBelow60) {
    errors.dob = 'Invalid age. Please enter a date of birth between 19 and 60 years.';
  }
}
    setErrorMessages(errors);

    // Check if any error exists
    if (Object.values(errors).some((error) => error !== '')) {
      console.log('Please fill in all required fields');
      return false;
    }

    // Your additional validation logic here if needed
     handleVerification();
    navigate('/popup');
  };
                                                                       
    // Retrieve data from sessionStorage
 
  
   
  
  
  
  return (
    <>    
    <div style={{background:'linear-gradient(rgb(255 221 157 / 9%), rgb(179 133 240 / 27%))'}}>
    <Animation/>
    <section className="container banner">
        <div className="row" style={{ display: "flex" }}>
        <div className="col-md-6" style={{textAlign:'end'}}>
        <h5
              class="banner_title"
              style={{
                fontFamily: 'Raleway',
                fontWeight: '800',
                color: 'rgba(0, 0, 0, 0.57)',
              }}
            >  
                  Your Dreams, Our Support:Welcome<br/>
                   to <span style={{color:'rgb(151,71,255)'}}>CreditHaat
                </span>
            </h5>
            <figure className="figure">
              <img
                src={gif}
                className="figure-img img-fluid banner_img"
                alt="..."
                style={{
                  
                  marginLeft:'auto',
                  display:'block',
                  width: "100%",
                  maxWidth: "300px",
                  marginTop:"-20px"
                }}
              />
            </figure>
          </div>
          <div className="col-md-6" id="Con">
          <Box
      sx={{
        display: "flex",  
        height: "100vh",
      }}
    >
     <Grid
        container
        direction="column"
        alignItems="left"
        justifyContent="left"
        sx={{ height: "100%" }}
        >
    <Grid item xs={12} md={4}>
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          maxWidth: 600,
          mx: "auto",
          p:2,
          borderRadius: "12px",
        }}
      >
          
         <Typography variant="h6" align="left" style={{fontFamily:'Raleway', textAlign:'center', fontSize:'15px', fontWeight:'700'}}>
         Moving Forward
                 </Typography>
        <Typography  align="" mb={2} style={{ textAlign:'center',fontSize:'16px', fontWeight:'600', color:'rgba(0, 0, 0, 0.68)'}}>
     Personalizing Your Loan Experience         
           </Typography>
         <form>
         <TextField name="pan" fullWidth label="Pan Number"  placeholder="Pan Number" variant="standard" required 
          style={{marginTop:'10px'}} 
          inputProps={{ maxLength: 10,
            pattern:'^[A-Z]{5}[0-9]{4}[A-Z]{1}$',
          }}
          
           value={pan}
          onChange={(e) => handleInputChange('pan', e.target.value)}
          />
           <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {errorMessages.pan}
            </Typography>
          <TextField name="dob" type='text' fullWidth label="Date of Birth (yyyy-mm-dd)" variant="standard" required 
           value={dob} placeholder='yyyy-mm-dd'
           onChange={(e) => handleInputChange('dob', e.target.value)}
           inputProps={{
            maxLength:10,
            pattern:'^[0-9]{4}-[0-9]{2}-[0-9]{2}$',
           }}
         style={{marginTop:'10px'}}/>
         <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {errorMessages.dob}
            </Typography>
         <TextField name="pincode" type='number'  fullWidth label="Pincode" 
      placeholder="Pincode" variant="standard" required style={{marginTop:'10px'}}
      value={pincode}
      onInput={(e)=>{ e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,6)}} min={1}
      onChange={(e) => handleInputChange('pincode', e.target.value)}
     />
      <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {errorMessages.pincode}
          </Typography>
         <TextField name="address" fullWidth label="Address"  multiline   id="standard-textarea"
      placeholder="Address" variant="standard" required style={{marginTop:'10px'}}
      value={address}
      onChange={(e) => handleInputChange('address', e.target.value)}
     />
    <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
              {errorMessages.address}
            </Typography>

     {/* <Typography  align="left" style={{ fontFamily: 'Raleway', textAlign: 'left', fontSize: '12px', fontWeight: '500', marginTop: '10px' }}>
    Pan Number*
  </Typography>
            <Box sx={{ display: 'flex', marginTop: '10px' }}>
          {mobileNumber.map((digit, index) => (
            <TextField
              key={index}
              name={`mobileNumber-${index}`}
              type="tel"
              fullWidth
              variant="standard"
              style={{
                width: '3%',
                marginRight: '1%',
                letterSpacing: '1px',
                textAlign: 'center',
              }}
              inputProps={{
                maxLength: 1,
                pattern: '^[0-9]$',
              }}
              value={digit}
              onChange={(e) => handleMobileNumberChange(index, e.target.value)}
              inputRef={mobileNumberRefs.current[index]}
            />
          ))}
            </Box>*/}

      <Box sx={{display:'flex',marginTop:'10px'}}>
        <a href='/personal loan' style={{marginLeft:'10px',color:'inherit',opacity:0.6,border:'2px solid background: rgba(217, 217, 217, 0.49)',
        borderRadius:'7px',padding:'5px',background:'#80808057'}}>
          <ArrowBackIcon fontSize='large' />
        </a>
        <Button variant='contained'
         style={{marginLeft:'5%',width:'85%', backgroundColor:'#9747FF', height:'50px',borderRadius:'15px'}}
         onClick={() => validation()}
          >Next</Button>
      </Box>
         </form>
     </Box>   
    </Grid>      
    </Grid>    
    </Box>       
 </div>

        </div>
      </section>
      <style>
        {`
         
         @media (min-width: 768px) {
          .col-md-6 {
            flex: 0 0 auto;
            width: 50%;
            margin-top:7%;
         }
         .banner_title{
     font-size:26px;
         }
        }
          @media (max-width: 768px) {
            .input-group mb-3{
               width:100%
            }

            .banner_title{
              font-size:15px;
              margin-top:5%;
              text-align: center;
             margin-left: 9.5%;   

            }
             
            .row {
              flex-direction: column;
            }
            .col-md-6 {
              width: 100%;
            }
            .banner_img {
              max-width: 100%; /* Adjust width as needed */
              height: 200px; /* Ensures image does not distort */
              margin: 1rem auto; /* Adds some space around the image */
            }
          }
        `}
      </style>
      <FormFooter/>
      </div>
    </>
  )
}

export default SecondPage