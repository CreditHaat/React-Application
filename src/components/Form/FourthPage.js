import React, { useContext, useState } from 'react';
import gif from '../../images/undraw_Completed_m9ci-removebg-preview 1.png';
import Animation from './Animation';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import FormFooter from './FormFooter';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Root.css';
import './Basicform.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/ContextFile';


const FourthPage = () => {
  const [employee, setEmployee] = useState('');
  const [payment, setPayment] = useState('');
  const [loanamount, setLoan] = useState('');
  const navigate=useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const { user, updateUser } = useContext(UserContext);


  const change = (e) => {
    setLoan(e.target.value);
  };

  const handleChange = (event) => {
    setEmployee(event.target.value);
  };

  const handleChange1 = (event) => {
    setPayment(event.target.value);
  };

  const validateForm = () => {
    const errors = {
      employee: typeof employee === 'string' && employee.trim() === '' ? 'Employee Type is required' : '',
      payment: typeof payment === 'string' && payment.trim() === '' ? 'Payment Type is required' : '',
      loanamount: typeof loanamount === 'string' && loanamount.trim() === '' ? 'Loan amount is required' : '',
    };
    setErrorMessages(errors);
    return Object.values(errors).every((error) => error === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setLoading(true); // Always set loading to true when the form is submitted

    if (validateForm()) {
      
    navigate('/submit');
      // Simulating a delay for the loader
      //setTimeout(() => {
      //  console.log('Form submitted successfully');
      //  navigate('/submit');
     // }, 7000); // Adjust the delay as needed
    
    } else {
      console.log('Please fill in all required fields');
    }
    handleVerification()
  };

  const handleVerification = async () => {
    
    try {
     
  
    
      const formData1 = new FormData();
     // formData.append('userPhoneNumber', upotp); // Assuming you have userPhoneNumber available
     const no=sessionStorage.getItem('userPhoneNumber');
     const formData = new FormData();
     formData.append('employee', employee);
     formData.append('loanamount', loanamount);
     formData.append('payment', payment);
     formData.append('userPhoneNumber',no);
     
     // Send the OTP verification request to the backend
     const response1 = await axios.post(`${process.env.REACT_APP_BASE_URL}fourpage`, formData);
 // console.log(response1.data.obj);
   //  sessionStorage.setItem('userData', JSON.stringify(response1.data.obj));
  
      // Handle the response from the backend
     
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div style={{ background: 'linear-gradient(rgb(255 221 157 / 9%), rgb(179 133 240 / 27%))' }}>
        <Animation />
       
        <section className="container banner">
          <div className="row" style={{ display: 'flex' }}>
            <div className="col-md-6" style={{ textAlign: 'end' }}>
              <h5
                className="banner_title"
                style={{
                  fontFamily: 'Raleway',
                  fontWeight: '800',
                  color: 'rgba(0, 0, 0, 0.57)',
                }}
              >
                Crossing the Finish Line with CreditHaat
              </h5>
              <figure className="figure">
                <img
                  src={gif}
                  className="figure-img img-fluid banner_img"
                  alt="..."
                  style={{
                    marginLeft: 'auto',
                    display: 'block',
                    width: '100%',
                    maxWidth: '300px',
                  }}
                />
              </figure>
            </div>
            <div className="col-md-6" id="Con">
              <Box
                sx={{
                  display: 'flex',
                  height: '100vh',
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
                        Ready to Launch: Last Step
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
                        Success Awaits: Finalize Your Loan
                      </Typography>
                      
                        <FormControl variant="standard" sx={{ m: 1, width: '100%' }}>
                          <InputLabel id="demo-simple-select-standard-label">Employment Type</InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={employee}
                            onChange={handleChange}
                            label="Employee Type"
                            sx={{ width: '100%' }}
                          >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={'salaried'}>Salaried</MenuItem>
                            <MenuItem value={'self-employed'}>Self-Employed</MenuItem>
                            <MenuItem value={'business'}>Business</MenuItem>
                          </Select>
                        </FormControl>
                        <Typography style={{ color: 'red', fontSize: '14px' }}>{errorMessages.employee}</Typography>
                        <TextField
                          name="loaamount"
                          type="number"
                          fullWidth
                          value={loanamount}
                          onChange={change}
                          label="Loan Amount"
                          placeholder="Loan Amount"
                          variant="standard"
                          required
                          style={{ marginTop: '0px', marginLeft: '6px' }}
                        />
                        <Typography style={{ color: 'red', fontSize: '14px' }}>{errorMessages.loanamount}</Typography>
                        <FormControl variant="standard" sx={{ m: 1, width: '100%' }}>
                          <InputLabel id="demo-simple-select-standard-label">Payment Type</InputLabel>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={payment}
                            onChange={handleChange1}
                            label="Payment Type"
                            sx={{ width: '100%' }}
                          >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={2}>Bank Transfer</MenuItem>
                            <MenuItem value={0}>Cash</MenuItem>
                            <MenuItem value={1}>Cheque</MenuItem>
                          </Select>
                        </FormControl>
                        <Typography style={{ color: 'red', fontSize: '14px' }}>{errorMessages.payment}</Typography>
                        <Box sx={{ display: 'flex' }}>
                          <a
                            href="/thirdf"
                            style={{
                              marginLeft: '10px',
                              color: 'inherit',
                              opacity: 0.6,
                              border: '2px solid background: rgba(217, 217, 217, 0.49)',
                              borderRadius: '7px',
                              padding: '5px',
                              background: '#80808057',
                            }}
                          >
                            <ArrowBackIcon fontSize="large" />
                          </a>
                          <Button
                            variant="contained"
                            type="submit"
                            style={{
                              marginLeft: '5%',
                              width: '85%',
                              backgroundColor: '#9747FF',
                              height: '50px',
                              borderRadius: '15px',
                            }}
                            onClick={handleSubmit}
                          >
                            submit
                          </Button>
                        </Box>
                      
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
          .loader-line-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5); /* Adjust the background color and opacity */
            z-index: 9999; /* Make sure the loader is above everything */
          }
          .loader-line {
            width: 250px;
            height: 5px;
            position: relative;
            overflow: hidden;
            background-color: #ddd;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
          }
          .loader-line:before {
            content: "";
            position: absolute;
            left: -50%;
            height: 5px;
            width: 40%;
            background-color: #9747FF;
            -webkit-animation: lineAnim 1s linear infinite;
            -moz-animation: lineAnim 1s linear infinite;
            animation: lineAnim 1s linear infinite;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
          }
          @keyframes lineAnim {
            0% {
              left: -40%;
            }
            50% {
              left: 20%;
              width: 80%;
            }
            100% {
              left: 100%;
              width: 100%;
            }
          }
        `}
        </style>
        <FormFooter />
      </div>
    </>
  );
};

export default FourthPage;
