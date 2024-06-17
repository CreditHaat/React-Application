import React, { useState } from "react";
// import "./MainComponent.module.css"; // Import the CSS file
import styles from './MainComponent.module.css'
import Navbar from "./Other Components/Navbar";
import FormPage from "./Other Components/Form";
import OTPVerification from "./Other Components/OTPVerification";
import axios from 'axios';
import './Other Components/Form.css';
import AddInfo from "./Other Components/AddInfo";
import LendersList from './Other Components/LendersList';
import BankName from "./Other Components/BankName";
import {  useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import KeyPartners from "./Other Components/KeyPartners";
import Review from "./Other Components/Review";
import LendingPartners from './Other Components/LendingPartners'

function MainComponent() {
    // Usestates for maintaining the single page application without refreshing the page

    const [showForm, setShowForm] = useState(true);
    const [showOTPVerification, setShowOTPVerification] = useState(false);
    const [showAddInfo, setShowAddInfo] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false); // Track transition state
    const [showLendersList, setShowLendersList] = useState(false);
    const [showBankNames, setShowBankNames] = useState(false);

    const [stgOneHitId, setStgOneHitId] = useState(null);
    const [stgTwoHitId, setstgTwoHitId] = useState(null);
    const [t_experian_log_id, sett_experian_log_id] = useState(null);
    const [upotp,setUpotp]=useState('');
    const [otpStatus, setOtpStatus] = useState('');

    /*--------------------------------HERE WE WILL CREATE A USESTATES FOR SENDIND THE FORM DATA TO BACKEND-------------------*/

    const [formData, setFormData] = useState({});

    const location=useLocation();

    /*-----------------------------FORM DATA TRANSFER END*-------------------------------------------------------------------*/

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {

            const queryParams = new URLSearchParams(location.search);

            // Retrieve values for the specified parameters
            const channel = queryParams.get('channel') || '';
            const dsa = queryParams.get('dsa') || '';
            const source = queryParams.get('source') || '';
            const subSource = queryParams.get('sub_source') || '';
            const subDsa = queryParams.get('sub_dsa') || '';

            console.log(formData.mobileNumber);

            const urllink=location.search?.split('?')[1] || 'null';

            const formData1=new FormData();
            formData1.append('userPhoneNumber',formData.mobileNumber);
            formData1.append('firstName',formData.firstName);
            formData1.append('lastName',formData.lastName);
            formData1.append('dsa',dsa);
            formData1.append('channel',channel);
            formData1.append('source',source);
            formData1.append('sub_source',subSource);
            formData1.append('campaign',urllink);
            formData1.append('sub_dsa',subDsa);


            // const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}chfronetendotpgenerator`, formData1, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}chfronetendotpgenerator`,formData1);

            if(response.data.code === 0){
      
                setStgOneHitId(response.data.obj.stgOneHitId);
                setstgTwoHitId(response.data.obj.stgTwoHitId);
                sett_experian_log_id(response.data.obj.t_experian_log_id);
                
            }

            console.log(response);

            if (response.status === 200) {
                console.log('Submission successful:', response.data);
            } else {
                console.error('Submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const verify_otp_credithaat_from_backend = async (e) => {
        e.preventDefault();
        try {
            const formData1=new FormData();
            formData1.append('mobileNumber', formData.mobileNumber);
            formData1.append('otp', upotp);
            formData1.append('stgOneHitId',stgOneHitId);
            formData1.append('stgTwoHitId',stgTwoHitId);
            formData1.append('t_experian_log_id',t_experian_log_id);

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}verifyOTP`,formData1);

            if(response.data.code === 0){
                // setOtpStatus("Loading ...");
                setShowOTPVerification(false);
                setShowAddInfo(true);
            }else{

                console.log("Incorrect OTP");
                setOtpStatus("Incorrect OTP! Try Again..");
            }

            console.log(response);

            if (response.status === 200) {
                console.log('Submission successful:', response.data);
            } else {
                console.error('Submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleOtpChange = (newValue) =>{
        setUpotp(newValue);
    };

    const handleOTPVerification = (e) => {
        console.log(upotp+'call');
        // verify_otp_credithaat_from_backend(e);
        // setShowOTPVerification(false); //We will be shifting this two functions into "verify_otp_credithaat_from_backend(e);" this function
        // setShowAddInfo(true);
      };

      const handleAddInfo=()=>{
        setShowAddInfo(false);
        setShowLendersList(true);
      }

      const handleOnGetLoan=()=>{
        setShowLendersList(false);
        showBankNames(true);
      }


    const handleSubmit = (e) => {//This handle Submit is only for Form Page 
        setIsTransitioning(true); // Start transition animation
        setTimeout(() => {
            setShowForm(false);
            setShowOTPVerification(true);
            setIsTransitioning(false);
            // setShowLendersList(false);
            // setShowBankNames(false);
            handleFormSubmit(e);//Called the function which will send the form data from frontend to backend
            // End transition animation after a delay
        }, 500); // Adjust delay time as needed
    };

    const handleChange = (e) => {//This function is used to handle the change that we make in the form
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className={styles.upperDiv}>
                <Navbar />
            </div>
            <div className={styles.lowerDiv}>
            <div className={`container ${isTransitioning ? 'transitioning' : ''}`}>
            {showForm && <FormPage onSubmit={handleSubmit} formData={formData} handleChange={handleChange} />}
            {showOTPVerification && !isTransitioning && <OTPVerification verifyOTP={handleOTPVerification} upotp={upotp} handleOtpChange={handleOtpChange} otpStatus={otpStatus}/>}
            {showAddInfo && <AddInfo goToLendersList={handleAddInfo} />}
            {showLendersList && <LendersList onGetLoan={handleOnGetLoan}/>}
            {showBankNames && <BankName/>} 
            </div>

            {showAddInfo && <Review />}
            {showForm && <Review />}

<div style={{marginBottom:'10px'}}>
            {showForm && <LendingPartners/>}
            {showForm && <KeyPartners/>}
                </div>

                {/* {showAddInfo && <Footer />}
                {showForm && <Footer />} */}

            </div>
        </>
    );
};

export default MainComponent;


