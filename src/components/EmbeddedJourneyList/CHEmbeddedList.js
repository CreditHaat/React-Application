// LendersList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import './CHEmbeddedList.css'; // Importing the CSS file
import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
import ApplicationLoader from '../NewPersonalLoan/Other Components/ApplicationLoader';
import ApplicationPopup from '../NewPersonalLoan/Other Components/ApplicationPopup';
import ErrorPopup from '../NewPersonalLoan/Other Components/ErrorPopup';



const LendersList = ({ json1, mobileNumber }) => {

  // const [formData2, setFormData2] = useState();
  const [stgOneHitId, setStgOneHitId] = useState(null);
  const [stgTwoHitId, setstgTwoHitId] = useState(null);
  const [t_experian_log_id, sett_experian_log_id] = useState(null);

  

  const [lenderName, setlenderName] = useState();
  const [link, setLink] = useState();

  const location = useLocation();

  const getLoanBackend = async (e, productname) => {
    e.preventDefault();

    try {
      const formData1 = new FormData();
      formData1.append('mobilenumber', mobileNumber);
      formData1.append('product', productname);

      setlenderName(productname);

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}apiExecution`, formData1, {
        headers: {
          'Content-Type': 'application/json',
          'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
        }
      });

      if (response.data.code === 0) {
        var redirectionlink = response.data.data.lender_details[0].applicationlink;
        setLink(redirectionlink);
        // {!setIsLoading && <ApplicationPopup link={link}/>}
      }

      if (response.data.code === -1) {

        // setErrorPopup(true); //This will be true when the code will be -1
      }

      console.log("for partner page", response);

    } catch (error) {

    }
  };

  const OTPGenerate = async (e) => {
    e.preventDefault();
    try {

      const queryParams = new URLSearchParams(location.search);

      // Retrieve values for the specified parameters
      const channel = queryParams.get('channel') || '';
      const dsa = queryParams.get('dsa') || '';
      const source = queryParams.get('source') || '';
      const subSource = queryParams.get('sub_source') || '';
      const subDsa = queryParams.get('sub_dsa') || '';

      console.log(mobileNumber);
      console.log("Inside OTP Generate....................., mobileNumber : ",mobileNumber);

      const urllink = location.search?.split('?')[1] || 'null';

      const formData1 = new FormData();
      formData1.append('userPhoneNumber', mobileNumber);
      // formData1.append('firstName', formData.firstName);
      // formData1.append('lastName', formData.lastName);
      // formData1.append('profession', formData.profession);
      formData1.append('dsa', dsa);
      formData1.append('channel', channel);
      formData1.append('source', source);
      formData1.append('sub_source', subSource);
      formData1.append('campaign', urllink);
      formData1.append('sub_dsa', subDsa);


      // const response = await axios.post(`${process.env.REACT_APP_BASE_URL}chfronetendotpgenerator`, formData1, {
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      // });

      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}chEmbeddedList_OTPGenerate`, formData1);

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

  return (
    <>


      {console.log("FormData : ", mobileNumber)}

      {console.log("in lendersList json : ", json1.lender_details)}

      <div>
        {json1.lender_details.map((lender, index) => (
          <div key={index} className="card-container">
            <div className="card-content">
              <img alt="logo" src={lender.logo} className="logo" />
              <div className="text-content">
                <Typography variant="h5" component="div" className="title" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  {lender.product}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="data" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  Quick Personal Loans, 100% digital collateral-free
                </Typography>
              </div>
            </div>
            <div className="details">
              <div className="detail">
                <Typography variant="body2" color="textSecondary" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  <span className="detail-label">{lender.maxloanamount}</span> <br />Max Amount
                </Typography>
              </div>
              <div className="detail">
                <Typography variant="body2" color="textSecondary" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  <span className="detail-labels" >{lender.tenure}</span> <br />Tenure
                </Typography>
              </div>
              <div className="detail">
                <Typography variant="body2" color="textSecondary" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  <span className="detail-labels" >{lender.interest}</span> <br />Interest
                </Typography>
              </div>
            </div>
            <div className="action-button">
              {/* <Link to={`/NewPersonalLoan/${lender.product}`} className="getLoanButtonLink"> */}
              {/* <button onClick={(e) => getLoanBackend(e, lender.product)} */}
              <button onClick={(e) => OTPGenerate(e) } 
                size="small"
                variant="contained"
                className="getLoanButton"
              >
                Get Loan
              </button>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default LendersList;
