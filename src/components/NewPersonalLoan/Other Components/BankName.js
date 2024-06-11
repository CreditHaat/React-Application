import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi"; // Import icons from react-icons library
import "./BankName.css";
import AxisBankLogo from "../NewPersonalLoanImages/Axis bank.png";
import StateBankLogo from "../NewPersonalLoanImages/sbi logo.png"; // Import bank logos
import HdfcBankLogo from "../NewPersonalLoanImages/hdfc (1).png";
import IciciBankLogo from "../NewPersonalLoanImages/icici.png";
import PnbBankLogo from "../NewPersonalLoanImages/pnb.jpg";
import BankOfBarodaLogo from "../NewPersonalLoanImages/baroda bank.png";
import abhyudayaBankLogo from "../NewPersonalLoanImages/abhyudayaBank.jpg";
import AllahabadBankLogo from "../NewPersonalLoanImages/AllahabadBank.png";
import AndhraBankLogo from "../NewPersonalLoanImages/AndhraBank.png";
import BankOfIndiaLogo from "../NewPersonalLoanImages/BankOfIndia.png";
import BankofMaharashtraLogo from "../NewPersonalLoanImages/BankofMaharashtra.png";
import BankofRajasthanLogo from "../NewPersonalLoanImages/BankofRajasthan.jpg";
import CanaraBankLogo from "../NewPersonalLoanImages/CanaraBank.jpg";
import CatholicSyrianBankLogo from "../NewPersonalLoanImages/CatholicSyrianBank.png";
import CentralBankofIndiaLogo from "../NewPersonalLoanImages/CentralBankofIndia.jpg";
import CitiBankLogo from "../NewPersonalLoanImages/CitiBankLogo.png";
import CorporationbankLogo from "../NewPersonalLoanImages/Corporationbank.png";
import DBSLogo from "../NewPersonalLoanImages/DBS.jpg";
import DenaBankLogo from "../NewPersonalLoanImages/DenaBank.jpg";
import DeutscheBankLogo from "../NewPersonalLoanImages/DeutscheBank.png";
import FederalBankLogo from "../NewPersonalLoanImages/FederalBank.png";
import DhanalakshmiBankLtdLogo from "../NewPersonalLoanImages/DhanalakshmiBankLtd.png";
import HSBCBankLogo from "../NewPersonalLoanImages/HSBCBank.png";
import YesBankLogo from "../NewPersonalLoanImages/yes_bank-1.png";
import UnionBankofIndiaLogo from "../NewPersonalLoanImages/UnionBank.png";
import VijayaBankLogo from "../NewPersonalLoanImages/VijayaBank.png";
import UnitedBankofIndiaLogo from "../NewPersonalLoanImages/UnitedBankofIndia.png";
import IDBIBankLogo from "../NewPersonalLoanImages/IDBIBank.png";
import IDFCBankLogo from "../NewPersonalLoanImages/IDFCBank.png";
import INGVysyaBankLogo from "../NewPersonalLoanImages/INGVysyaBank.png";
import IndianBankLogo from "../NewPersonalLoanImages/IndianBank.png";
import IndianOverseasBankLogo from "../NewPersonalLoanImages/IndianOverseasBank.png";
import IndusIndBankLogo from "../NewPersonalLoanImages/IndusIndBank.png";
import JKBankLogo from "../NewPersonalLoanImages/J&KBank.png";
import KarnatakaBankLogo from "../NewPersonalLoanImages/KarnatakaBank.png";
import KarurVysyaBankLogo from "../NewPersonalLoanImages/KarurVysyaBank.jpg";
import KotakBankLogo from "../NewPersonalLoanImages/KotakBank.png";
import LakshmiVilasbankLogo from "../NewPersonalLoanImages/LakshmiVilasbank.png";
import OrientalBankofCommerceLogo from "../NewPersonalLoanImages/OrientalBankofCommerce.jpg";
import PunjabSindbankLogo from "../NewPersonalLoanImages/PunjabSindbank.png";
import RBLBankLtdLogo from "../NewPersonalLoanImages/RBLBankLtd.png";
import SBMbankLogo from "../NewPersonalLoanImages/SBMbank.jpg";
import SaraswatBankLogo from "../NewPersonalLoanImages/SaraswatBank.jpg";
import SouthIndianBankLogo from "../NewPersonalLoanImages/SouthIndianBank.png";
import StandardCharteredBankLogo from "../NewPersonalLoanImages/StandardCharteredBank.png";
import StateBankofBikanerJaipurLogo from "../NewPersonalLoanImages/StateBankofBikanerJaipur.png";
import StateBankofHyderabadLogo from "../NewPersonalLoanImages/BankofHyderabadLogo.jpeg";
import UCOBankLogo from "../NewPersonalLoanImages/UCOBank.png";
import PartnerNavbar from "./PartnerNavbar";
// import PartnerNavBar from "./PartnerNavbar";
// import partnerNavbar from './PartnerNavbar';
// import PartnerNavBar from './'

function BankName() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBank, setSelectedBank] = useState(null);

  // Bank data
  const banks = [
    { name: "Axis Bank", logo: AxisBankLogo },
    { name: "State Bank of India", logo: StateBankLogo },
    { name: "HDFC Bank", logo: HdfcBankLogo },
    { name: "ICICI Bank", logo: IciciBankLogo },
    { name: "Punjab National Bank", logo: PnbBankLogo },
    { name: "Bank of Baroda", logo: BankOfBarodaLogo },
    // Add more banks here
    { name: "Abhyuday Co-op Bank Ltd", logo: abhyudayaBankLogo },
    { name: "Allahabad Bank",  logo: AllahabadBankLogo },
    { name: "Andhra Bank", logo: AndhraBankLogo},
    { name: "Bank of India", logo: BankOfIndiaLogo },
    { name: "Bank of Maharashtra", logo: BankofMaharashtraLogo },
    { name: "Bank of Rajasthan", logo: BankofRajasthanLogo },
    { name: "Canara Bank", logo: CanaraBankLogo },
    { name: "Catholic Syrian Bank", logo: CatholicSyrianBankLogo},
    { name: "Central Bank of India", logo: CentralBankofIndiaLogo },
    { name: "Citi Bank", logo: CitiBankLogo },
    { name: "Corporation bank", logo:CorporationbankLogo },
    { name: "DBS Bank", logo: DBSLogo },
    { name: "Dena Bank", logo: DenaBankLogo },
    { name: "Deutsche Bank" , logo: DeutscheBankLogo},
    { name: "Dhanalakshmi Bank Ltd" ,logo: DhanalakshmiBankLtdLogo },
    { name: "Federal Bank", logo:FederalBankLogo },
    { name: "HSBC Bank", logo:HSBCBankLogo },
    { name: "IDBI Bank", logo:IDBIBankLogo },
    { name: "IDFC Bank", logo:IDFCBankLogo},
    { name: "ING Vysya Bank" , logo:INGVysyaBankLogo},
    { name: "Indian Bank" ,logo:IndianBankLogo},
    { name: "Indian Overseas Bank",logo:IndianOverseasBankLogo },
    { name: "IndusInd Bank", logo:IndusIndBankLogo },
    { name: "J&K Bank", logo:JKBankLogo},
    { name: "Karnataka Bank", logo:KarnatakaBankLogo },
    { name: "Karur Vysya Bank", logo:KarurVysyaBankLogo },
    { name: "Kotak Bank", logo:KotakBankLogo },
    { name: "Lakshmi Vilas bank" , logo:LakshmiVilasbankLogo},
    { name: "Oriental Bank of Commerce", logo:OrientalBankofCommerceLogo },
    { name: "Punjab & Sind bank", logo:PunjabSindbankLogo },
    { name: "RBL Bank Ltd", logo:RBLBankLtdLogo },
    { name: "SBM Bank", logo: SBMbankLogo },
    { name: "Saraswat Bank" , logo:SaraswatBankLogo },
    { name: "South Indian Bank", logo:SouthIndianBankLogo },
    { name: "Standard Chartered Bank" , logo:StandardCharteredBankLogo},
    { name: "State Bank of Bikaner & Jaipur", logo:StateBankofBikanerJaipurLogo },
    { name: "State Bank of Hyderabad", logo:StateBankofHyderabadLogo },,
    { name: "UCO Bank", logo:UCOBankLogo },
    { name: "Union Bank of India", logo:UnionBankofIndiaLogo },
    { name: "United Bank of India", logo:UnitedBankofIndiaLogo },
    { name: "Vijaya Bank" ,logo: VijayaBankLogo},
    { name: "Yes Bank", logo: YesBankLogo },
  ];
  

  // Function to handle change in search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to clear search query
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Function to handle button click
  const handleButtonClick = (bankName) => {
    setSelectedBank(bankName);
  };

  // Filter banks based on search query
  const filteredBanks = banks.filter(bank =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderBankOptions = () => {
    return filteredBanks.map((bank, index) => (
      <div className="BankOption2" key={index}>
        <button
          className={selectedBank === bank.name ? "selected" : ""}
          onClick={() => handleButtonClick(bank.name)}
        >
          <img src={bank.logo} alt={bank.name} />
          <span>{bank.name}</span>
        </button>
      </div>
    ));
  };

  return (
    <>
    
    <div className="partner">
    <PartnerNavbar/>
    </div>



    <div className="Bank-Container">
    
      <div className="SearchBar">
        <div className="SearchIcon">
          <FiSearch />
        </div>
        <input
          type="text"
          className="SearchInput"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search bank..."
        />
        {searchQuery && (
          <div className="CancelIcon" onClick={clearSearch}>
            <FiX />
          </div>
        )}
      </div>
      

      <div className="bankListContainer">
        {searchQuery ? (
          <div>
            {filteredBanks.length > 0 ? (
              renderBankOptions()
            ) : (
              <p>No banks found</p>
            )}
          </div>
        ) : (
          <>
            <h3 className="SelectPrimaryBank">Select Your Primary Bank Account</h3>
            <div className="BankOptions">
              <div className="BankOption">
                <button
                  className={selectedBank === "Axis Bank" ? "selected" : ""}
                  onClick={() => handleButtonClick("Axis Bank")}
                >
                  <img src={AxisBankLogo} alt="Axis Bank" />
                  <span>Axis Bank</span>
                </button>
              </div>
              <div className="BankOption">
                <button
                  className={selectedBank === "HDFC Bank" ? "selected" : ""}
                  onClick={() => handleButtonClick("HDFC Bank")}
                >
                  <img src={HdfcBankLogo} alt="HDFC Bank" />
                  <span>HDFC Bank</span>
                </button>
              </div>
            </div>
            <div className="BankOptions">
              <div className="BankOption">
              <button
            className={selectedBank === 'ICICI Bank' ? 'selected' : ''}
            onClick={() => handleButtonClick('ICICI Bank')}
          >
            <img src={IciciBankLogo} alt="ICICI Bank" />
            <span>ICICI Bank</span>
          </button>
              </div>
              <div className="BankOption">
              <button
            className={selectedBank === 'State Bank of India' ? 'selected' : ''}
            onClick={() => handleButtonClick('State Bank of India')}
          >
            <img src={StateBankLogo} alt="State Bank of India" />
            <span>State Bank of India</span>
          </button>
              </div>
            </div>
            <div className="BankOptions">
              <div className="BankOption">
              <button
            className={selectedBank === 'Punjab National Bank' ? 'selected' : ''}
            onClick={() => handleButtonClick('Punjab National Bank')}
          >
            <img src={PnbBankLogo} alt="Punjab National Bank" />
            <span>Punjab National Bank</span>
          </button>
              </div>
              <div className="BankOption">
              <button
            className={selectedBank === 'Bank of Baroda' ? 'selected' : ''}
            onClick={() => handleButtonClick('Bank of Baroda')}
          >
            <img src={BankOfBarodaLogo} alt="Bank of Baroda" />
            <span>Bank of Baroda</span>
          </button>
              </div>
            </div>
            <h3 className="SelectPrimaryBank">All Banks</h3>
            {/* Add more bank options here */}
            {renderBankOptions()}
          </>
        )}
      </div>
    </div>
    </>
  );
}

export default BankName;
