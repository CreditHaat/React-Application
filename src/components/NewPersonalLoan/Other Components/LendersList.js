// LendersList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import './LendersList.css'; // Importing the CSS file
// import fibeImg from '../images/fibelogo.jpg';
import fibeImg from '../NewPersonalLoanImages/fibelogo.jpg';
import coin from '../NewPersonalLoanImages/SmartCoin.png';
import ltfs from '../NewPersonalLoanImages/ltfs.png';

const LendersList = () => {
  return (
    <>
      <section className="container banner">
        <div className="row">
          <div className="col-md-6">
            <h1 className="banner_title">
              <span className="text-cont primary-color">Lending</span>&nbsp;
              <span className="text-cont">partner</span>
            </h1>
          </div>
          <div className="col-md-6 text-center"></div>
        </div>
      </section>

      {/* First Card */}
      <div className="card-container">
        <div className="card-content">
          <img alt="logo" src={fibeImg} className="logo" />
          <div className="text-content">
            <Typography variant="h5" component="div" className="title">
              EarlySalary
            </Typography>
            <Typography variant="body2" color="textSecondary" className="data">
              You can access personal loan at your convenience
            </Typography>
          </div>
        </div>
        <div className="details">
          <div className="detail">
            <Typography variant="body2" color="textSecondary">
              <span className="detail-label">₹5,00,000</span> <br />Max Amount
            </Typography>
          </div>
          <div className="detail">
            <Typography variant="body2" color="textSecondary">
              <span className="detail-labels">3-12 Months</span> <br />Tenure
            </Typography>
          </div>
          <div className="detail">
            <Typography variant="body2" color="textSecondary">
              <span className="detail-labels">2%-2.5% Monthly</span> <br />Interest
            </Typography>
          </div>
        </div>
        <div className="action-button">
          <Link to="/NewPersonalLoan/bankname" className="getLoanButtonLink">
            <button
              size="small"
              variant="contained"
              className="getLoanButton"
            >
              Get Loan
            </button>
          </Link>
        </div>
      </div>

      {/* Second Card */}
      <div className="card-container">
        <div className="card-content">
          <img alt="logo" src={coin} className="logo" />
          <div className="text-content">
            <Typography variant="h5" component="div" className="title">
              SmartCoin
            </Typography>
            <Typography variant="body2" color="textSecondary" className="data">
              Quick Personal Loans, 100% digital collateral-free
            </Typography>
          </div>
        </div>
        <div className="details">
          <div className="detail">
            <Typography variant="body2" color="textSecondary">
              <span className="detail-label">₹5,00,000</span> <br />Max Amount
            </Typography>
          </div>
          <div className="detail">
            <Typography variant="body2" color="textSecondary">
              <span className="detail-labels">60-365 Days</span> <br />Tenure
            </Typography>
          </div>
          <div className="detail">
            <Typography variant="body2" color="textSecondary">
              <span className="detail-labels">1.5%-2% per month</span> <br />Interest
            </Typography>
          </div>
        </div>
        <div className="action-button">
          <Link to="/NewPersonalLoan/bankname" className="getLoanButtonLink">
            <button
              size="small"
              variant="contained"
              className="getLoanButton"
            >
              Get Loan
            </button>
          </Link>
        </div>
      </div> 

      {/* Third Card */}
      <div className="card-container">
        <div className="card-content">
          <img alt="logo" src={ltfs} className="logo" />
          <div className="text-content">
            <Typography variant="h5" component="div" className="title">
              LTFS
            </Typography>
            <Typography variant="body2" color="textSecondary" className="data">
              Quick Personal Loans, 100% digital collateral-free
            </Typography>
          </div>
        </div>
        <div className="details">
          <div className="detail">
            <Typography variant="body2" color="textSecondary">
              <span className="detail-label">₹5,00,000</span> <br />Max Amount
            </Typography>
          </div>
          <div className="detail">
            <Typography variant="body2" color="textSecondary">
              <span className="detail-labels">60-365 Days</span> <br />Tenure
            </Typography>
          </div>
          <div className="detail">
            <Typography variant="body2" color="textSecondary">
              <span className="detail-labels">1.5%-2% per month</span> <br />Interest
            </Typography>
          </div>
        </div>
        <div className="action-button">
          <Link to="/NewPersonalLoan/bankname" className="getLoanButtonLink">
            <button
              size="small"
              variant="contained"
              className="getLoanButton"
            >
              Get Loan
            </button>
          </Link>
        </div>
      </div> 
    </>
  );
};

export default LendersList;
