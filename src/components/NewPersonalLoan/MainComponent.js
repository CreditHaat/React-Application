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

function MainComponent() {
    // Usestates for maintaining the single page application without refreshing the page

    const [showForm, setShowForm] = useState(true);
    const [showOTPVerification, setShowOTPVerification] = useState(false);
    const [showAddInfo, setShowAddInfo] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false); // Track transition state
    const [showLendersList, setShowLendersList] = useState(false);
    const [showBankNames, setShowBankNames] = useState(false);

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

            if (response.status === 200) {
                console.log('Submission successful:', response.data);
            } else {
                console.error('Submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleOTPVerification = () => {
        setShowOTPVerification(false);
        setShowAddInfo(true);
      };

      const handleAddInfo=()=>{
        setShowAddInfo(false);
        setShowLendersList(true);
      }

      const handleOnGetLoan=()=>{
        setShowLendersList(false);
        showBankNames(true);
      }


    const handleSubmit = (e) => {
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
            {showOTPVerification && !isTransitioning && <OTPVerification verifyOTP={handleOTPVerification} />}
            {showAddInfo && <AddInfo goToLendersList={handleAddInfo} />}
            {showLendersList && <LendersList onGetLoan={handleOnGetLoan}/>}
            {showBankNames && <BankName/>} 
            </div>
            </div>
        </>
    );
};

export default MainComponent;


