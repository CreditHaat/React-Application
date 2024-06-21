import React, { useEffect, useState } from "react";
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
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import KeyPartners from "./Other Components/KeyPartners";
import Review from "./Other Components/Review";
import LendingPartners from './Other Components/LendingPartners'
// import GridContainer from "./Other Components/NewFooter";
import NewFooter from "./Other Components/NewFooter";
import NewKeyPartners from "./Other Components/NewKeyPartners";

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
    const [upotp, setUpotp] = useState('');
    const [otpStatus, setOtpStatus] = useState('');

    const [lenderDetails, setLenderDetails] = useState([]);
    var json = null;

    /*--------------------------------HERE WE WILL CREATE A USESTATES FOR SENDIND THE FORM DATA TO BACKEND-------------------*/

    const [formData, setFormData] = useState({});

    // const [addInfoData, setAddInfoData] = useState(new AddInfoData())

    const [profession, setProfession] = useState('');
    const [income, setIncome] = useState('');
    const [salaryType, setSalaryType] = useState('');

    const [email, setEmail] = useState('');
    const [pincode, setPincode] = useState('');

    const location = useLocation();

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

            const urllink = location.search?.split('?')[1] || 'null';

            const formData1 = new FormData();
            formData1.append('userPhoneNumber', formData.mobileNumber);
            formData1.append('firstName', formData.firstName);
            formData1.append('lastName', formData.lastName);
            formData1.append('dsa', dsa);
            formData1.append('channel', channel);
            formData1.append('source', source);
            formData1.append('sub_source', subSource);
            formData1.append('campaign', urllink);
            formData1.append('sub_dsa', subDsa);


            // const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}chfronetendotpgenerator`, formData1, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}chfronetendotpgenerator`, formData1);

            if (response.data.code === 0) {

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
            const formData1 = new FormData();
            formData1.append('mobileNumber', formData.mobileNumber);
            formData1.append('otp', upotp);
            formData1.append('stgOneHitId', stgOneHitId);
            formData1.append('stgTwoHitId', stgTwoHitId);
            formData1.append('t_experian_log_id', t_experian_log_id);

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}verifyOTP`, formData1);

            if (response.data.code === 0) {
                // setOtpStatus("Loading ...");
                setShowOTPVerification(false);
                setShowAddInfo(true);
            } else {

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

    const handleAddInfoFormSubmit = async (e) => {
        e.preventDefault();
        try {

            console.log("Tejas ", profession);
            console.log(income);
            console.log(salaryType);



            const formData1 = new FormData();
            formData1.append('mobileNumber', formData.mobileNumber);
            formData1.append('profession', profession);
            formData1.append('income', income);
            formData1.append('salaryType', salaryType);
            // formData1.append('t_experian_log_id',t_experian_log_id);


            // const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}chfronetendotpgenerator`, formData1, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}secondpageNewpersonalloan`, formData1);

            if (response.data.code === 0) {

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

    //This is the backend for AddInfo second form
    const handleAddInfoFormSubmit2 = async (e) => {
        e.preventDefault();
        try {

            const formData1 = new FormData();
            formData1.append('mobileNumber', formData.mobileNumber);
            formData1.append('email', email);
            formData1.append('pincode', pincode);

            // formData1.append('t_experian_log_id',t_experian_log_id);


            // const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}chfronetendotpgenerator`, formData1, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}thirdpageNewpersonalloan`, formData1);

            if (response.data.code === 0) {

                console.log('Submission successful:', response.data);

                //Here when the code is 0 we are calling lendersList backend which will give us lendersList accrding to user
                getLendersList(e);

                // setShowAddInfo(false);
                // setShowLendersList(true);

            }

            console.log(response);

            if (response.status === 200) {


            } else {
                console.error('Submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    //We will use this function to call the lendersList from backend
    const getLendersList = async (e) => {
        e.preventDefault();
        try {

            const formData1 = new FormData();
            formData1.append('mobilenumber', formData.mobileNumber);

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL1234}lenderslist`, formData1, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
                }
            });

            console.log(response);

            if (response.data.code === 200) {
                console.log('Submission successful from Lenders Backend:', response.data);
                json = response.data.data;
                setLenderDetails(json);
                console.log("Recieved Data from backend ", json);

                setShowAddInfo(false);
                setShowLendersList(true);
            }

            if (response.status === 200) {
                
            } else {
                console.error('Submission failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    useEffect(()=>{
        console.log('Lender Details in useState : ',lenderDetails);
    },[lenderDetails]);


    const handleOtpChange = (newValue) => {
        setUpotp(newValue);
    };

    const handleOTPVerification = (e) => {
        // console.log(upotp+'call');
        verify_otp_credithaat_from_backend(e);
        // setShowOTPVerification(false); //We will be shifting this two functions into "verify_otp_credithaat_from_backend(e);" this function
        // setShowAddInfo(true);
    };

    const handleAddInfo = (e) => {

        // handleAddInfoFormSubmit2(e);

        // setShowAddInfo(false);
        // setShowLendersList(true);
    }

    const handleOnGetLoan = () => {
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
                    {showOTPVerification && !isTransitioning && <OTPVerification verifyOTP={handleOTPVerification} upotp={upotp} handleOtpChange={handleOtpChange} otpStatus={otpStatus} />}
                    {showAddInfo && <AddInfo handleAddInfoFormSubmit={handleAddInfoFormSubmit} handleAddInfoFormSubmit2={handleAddInfoFormSubmit2} profession1={profession} income1={income} salaryType1={salaryType} setProfession1={setProfession} setIncome1={setIncome} setSalaryType1={setSalaryType} email1={email} pincode1={pincode} setEmail1={setEmail} setPincode1={setPincode} goToLendersList={handleAddInfo} />}
                    {showLendersList && <LendersList json1={lenderDetails} onGetLoan={handleOnGetLoan} />}
                    {showBankNames && <BankName />}
                </div>

                {/* {showAddInfo && <Review />} */}
                {showForm && <Review />}

                <div style={{ marginBottom: '10px' }}>
                    {showForm && <LendingPartners />}
                    {/* {showForm && <KeyPartners/>} */}
                    {showForm && <NewKeyPartners />}
                </div>

                {/* {/* {showAddInfo && <Footer />} */}
                {/* {showForm && <Footer />} */}

            </div>

            {showForm && <NewFooter />}
            {showAddInfo && <NewFooter />}

            {/* {showForm && <GridContainer/>} */}
        </>
    );
};

export default MainComponent;


