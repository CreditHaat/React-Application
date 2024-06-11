// PartnerNavBar.js
import React from "react";
import "./PartnerNavbar.css"; // Import your CSS file for styling
import i from "../NewPersonalLoanImages/logo1-removebg-preview.png";
import f from "../NewPersonalLoanImages/fibelogo.jpg";

function PartnerNavbar() {
  return (
    <nav className="partner-navbar">
      <div className="partner-navbar-container">
        {/* Logo 1 */}
        <div className="partner-logo">
          <img className="nav-logo" src={f} alt="Logo 1" />
        </div>
        {/* Logo 2 */}
        <div className="partner-logo">
          <img className="nav-logo" src={i} alt="Logo 2" />
        </div>
      </div>
    </nav>
  );
}

export default PartnerNavbar;
