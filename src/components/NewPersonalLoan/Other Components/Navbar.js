import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icon";
import i from '../NewPersonalLoanImages/logo1-removebg-preview.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        <h4>CreditHaat</h4>
        <img className="nav-logo.icon" src={i} alt="logo_pic" height={'40px'} width={'40px'} style={{marginLeft:'0px'}}/>
          <NavLink  className="nav-logo">
              
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/personal"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick} style={{color:'black'}}
              >
                Personal Loan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                 to="/business"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}  style={{color:'black'}}
              >
                Business Loan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/credit"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}  style={{color:'black'}}
              >
              Credit Card
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;