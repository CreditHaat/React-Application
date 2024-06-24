// LendersList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import './LendersList.css'; // Importing the CSS file
// import fibeImg from '../images/fibelogo.jpg';
import fibeImg from '../NewPersonalLoanImages/fibelogo.jpg';
import coin from '../NewPersonalLoanImages/SmartCoin.png';
import ltfs from '../NewPersonalLoanImages/ltfs.png';
import axios from 'axios';
import ApplicationLoader from './ApplicationLoader';
import ApplicationPopup from './ApplicationPopup';


const LendersList = ({ json1, onGetLoan, lenderProduct, setLenderProduct,formData}) => {

  // const [formData2, setFormData2] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [link, setLink] = useState("https://www.google.com");
  const [isCameFromBackend, setIsCameFromBackend] = useState();
  const [lenderName, setlenderName] = useState("NA");

  const getLoanBackend = async (e,productname) => {

    setIsLoading(true);

    e.preventDefault();

    try{
      const formData1 = new FormData();
    formData1.append('mobilenumber', formData.mobileNumber);
    formData1.append('product', productname);

    setlenderName(productname);

    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}apiExecution`, formData1, {
      headers: {
          'Content-Type': 'application/json',
          'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
      }
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    setIsCameFromBackend(true);

    

    if(response.data.code === 0){
      var redirectionlink = response.data.data.lender_details.applicationlink;
      setLink(redirectionlink);
      {!setIsLoading && <ApplicationPopup link={link}/>}
    }

    console.log("for partner page",response);

    }catch(error){

    }

};

return (
<>
    {!isLoading && isCameFromBackend && <ApplicationPopup link={link} lenderName={lenderName}/>}
    {isLoading && <ApplicationLoader/>}

    {console.log("FormData : ",formData)}

    {console.log("in lendersList json : ",json1.lender_details)}

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
              <button onClick={(e) => getLoanBackend(e, lender.product)}
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

// export default LendersList;


export default LendersList;
