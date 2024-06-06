import React, { useContext, useState,useEffect } from 'react'
import gif from '../../images/undraw_Personal_email_re_4lx7-removebg-preview 1.png';
import Animation from './Animation';
import { Box, Button,  Grid, TextField, Typography } from '@mui/material';
import FormFooter from './FormFooter';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Root.css';
import { useNavigate } from 'react-router-dom';
import Sheet from '@mui/joy/Sheet';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import './Basicform.css';
import axios from 'axios';
import { UserContext } from '../../context/ContextFile';


const ThirdPage = () => {

  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [income, setIncome] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    gender: '',
    income: '',
  });

  useEffect(() => {
    // Retrieve data from session storage
    const storedUserData = sessionStorage.getItem('userData');
    const mydata = JSON.parse(storedUserData);

    // Update state based on mydata
    setEmail(mydata ? mydata.email : '');
    setGender(mydata ? mydata.gender : '');
    setIncome(mydata ? mydata.salary : '');
  }, []); // Empty dependency array ensures the effect runs only once on component mount



  const { user, updateUser } = useContext(UserContext);


const navigate=useNavigate();

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'email':
        case 'email':
          setEmail(value);
          if (!value.trim()) {
            setErrorMessages((prevErrors) => ({
              ...prevErrors,
              email: 'Email is required',
            }));
          } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)) {
            setErrorMessages((prevErrors) => ({
              ...prevErrors,
              email: 'Please enter a valid email address',
            }));
          } else {
            setErrorMessages((prevErrors) => ({
              ...prevErrors,
              email: '',
            }));
          }
            break;
      case 'gender':
        setGender(value);
        break;
      case 'income':
        setIncome(value);
        break;
      default:
        break;
    }
  };

  const validation = () => {
    const errors = {
      email: !email || !email.trim() ? 'Email is required' : errorMessages.email,
      gender: !gender || !gender.trim() ? 'Gender is required' : '',
      income: !income || !String(income).trim() ? 'Income is required' : '', // Convert income to string before using trim
    };

    setErrorMessages(errors);

    // Check if any error exists
    if (Object.values(errors).some((error) => error !== '')) {
      console.log('Please fill in all required fields');
      return false;
    }

    // Your additional validation logic here if needed
    handleVerification();
    navigate('/thirdpopup')
  };

  
  const handleVerification = async () => {
    
    try {
     
  
    
      const formData1 = new FormData();
     // formData.append('userPhoneNumber', upotp); // Assuming you have userPhoneNumber available
    // const no=user ? user.number : '';
    const no=sessionStorage.getItem('userPhoneNumber');
     const formData = new FormData();
     formData.append('email', email);
     formData.append('gender', gender);
     formData.append('income', income);
     formData.append('userPhoneNumber',no);
     
     // Send the OTP verification request to the backend
     const response1 = await axios.post(`${process.env.REACT_APP_BASE_URL}thirdpage`, formData);
     if (response1.data.obj !== null) {
      console.log(response1.data.obj);
      sessionStorage.setItem('userData', JSON.stringify(response1.data.obj));
    }
      // Handle the response from the backend
     
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
                fontFamily: "Raleway",
                fontWeight: "800",
                color:'rgba(0, 0, 0, 0.57)',
              }}
            >

             Your Goals,
                   Our Commitment
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
         Getting to Know You
        </Typography>
        <Typography  align="" mb={2} style={{ textAlign:'center',fontSize:'16px', fontWeight:'600', color:'rgba(0, 0, 0, 0.68)'}}>
        Unlocking your personal profile  </Typography>
        <div>
         
         <TextField name="email" type='email' fullWidth
          
         label="Email" placeholder="Email" variant="standard"  
           style={{marginTop:'10px'}}  value={email}
           onChange={(e) => handleInputChange('email', e.target.value)}
           />
            <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
               {errorMessages.email}
             </Typography>
          
             <Box sx={{ width: 300 }}>
        <FormLabel
        id="gender-label"
        sx={{
          mb: 2,
          fontSize: 'xs',
          letterSpacing: '0.15rem',
          color: 'rgba(0, 0, 0, 0.48)',
          marginTop:'10px'
        }}
      >
        Gender
      </FormLabel>
      <RadioGroup style={{alignItems: 'center',flexDirection: 'row',display: 'flex',backgroundColor: 'transparent'}}
        aria-labelledby="storage-label"
        defaultValue="512GB"
        size="lg"
        name='gender'
        value={gender}
        onChange={(e) => handleInputChange('gender', e.target.value)}
        row
        sx={{ gap: 1.5 }}
      >
        {['Male', 'Female'].map((value) => (
          <Sheet
            key={value}
            sx={{
              p: 2,
              borderRadius: 'md',
              boxShadow: 'sm',
              width: '150px', // Adjust the width here
            }}
          >
            <Radio
              label={`${value}`}
              overlay
              disableIcon
              value={value}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: 'lg',
                    fontSize: 'md',
                    color: checked ? 'text.primary' : 'text.secondary',
                  },
                }),
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      '--variant-borderWidth': '2px',
                      '&&': {
                        // && to increase the specificity to win the base :hover styles
                        borderColor: theme.vars.palette.primary[500],
                      },
                    }),
                  }),
                }),
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
      </Box>
    <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
               {errorMessages.gender}
      </Typography>
    
    <TextField name="income" type='number' fullWidth 
           label="Monthly Income" placeholder="Monthly Income" variant="standard"   
           value={income}
           onChange={(e) => handleInputChange('income', e.target.value)}
           />
            <Typography style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
               {errorMessages.income}
             </Typography>
              
  <br/>
      <Box sx={{display:'flex',marginTop:'20px'}}>
        <a href='/secondf' style={{marginLeft:'10px',color:'inherit',opacity:0.6,border:'2px solid background: rgba(217, 217, 217, 0.49)',
        borderRadius:'7px',padding:'5px',background:'#80808057'}}>
          <ArrowBackIcon fontSize='large' />
        </a>
        <Button variant='contained' type='submit' 
     style={{marginLeft:'5%',width:'85%', backgroundColor:'#9747FF', height:'50px',borderRadius:'15px'}}  
     onClick={() => validation()}
         >Next</Button>
      </Box>
         </div>
     </Box>  
     </Grid>      
    </Grid>    
    </Box>       
 </div>

        </div>
      </section>
      <style>
        {` @media (min-width: 768px) {
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

export default ThirdPage

