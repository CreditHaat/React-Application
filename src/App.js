import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import NavBar from './components/Header/NavBar';
import PersonalLoanPage from './components/PersonalLoan/PersonalLoanPage';
import BusinessLoanPage from './components/BusinessLoan/BusinessLoanPage';
import CreditMain from './components/Credit/CreditMain';
import UpcomingProducts from './components/Upcoming/UpcomingProducts';
import AcquisitionPartner from './components/Acqusition/AcquisitionPartner';
import FAQ from './components/Homepage/FAQ';
import GROFile from './components/GRO/GROFile';
import TermsCondition from './components/TermsCondition/TermsCondition';
import PrivacyPolicy from './components/TermsCondition/PrivacyPolicy';
import Support from './components/TermsCondition/Support';
import PageCreditScore from './components/CreditScore/PageCreditScore';
import ExperianTerms from './components/TermsCondition/ExperianTerms';
import LendingPartner from './components/LendingPartner/LendingPartner';
import ThirdPage from './components/Form/ThirdPage';
import FourthPage from './components/Form/FourthPage';
import BasicForm from './components/Form/BasicForm';
import DialogC from './components/Form/DialogC';
import SecondPage from './components/Form/SecondPage';
import Popup from './components/Form/Popup';
import ThirdPopup from './components/Form/ThirdPopup';
import { UserProvider } from './context/ContextFile';
import SubmitPopup from './components/Form/SubmitPopup';
import Loader from './components/Form/Loader';
import ConfettiComponent from './components/Form/ConfettiComponent';
import SuccessPage from './components/Form/SuccessPage';
import ShoppingLoan from './components/Form/ShoppingLoan';
import EmergencyLoan from './components/Form/EmergencyLoan';
import TravelLoan from './components/Form/TravelLoan';
import MarriageLoan from './components/Form/MarriageLoan';
import FirstPage from './components/CreditCard/FirstPage';
import Dialogbox from './components/CreditCard/Dialogbox';
import ListPage from './components/CreditCard/ListPage';
import LoaderPage from './components/CreditCard/LoaderPage';
import SecondFormPage from './components/CreditCard/SecondFormPage';
import MainComponent from './components/NewPersonalLoan/MainComponent';
import BankName from './components/NewPersonalLoan/Other Components/BankName';
function App() {
  return (
    <>
   
    <main>
        <UserProvider>

        <Routes>
         <Route path='/' element={[<NavBar/>,<HomePage/>,<Footer/>]}/>
         <Route path='/personal' element={[<NavBar/>,<PersonalLoanPage/>,<Footer/>]}/>
         <Route path='/credit' element={[<NavBar/>,<CreditMain/>,<Footer/>]}/>
         <Route path='/business' element={[<NavBar/>,<BusinessLoanPage/>,<Footer/>]}/>
         <Route path='/upcoming' element={[<NavBar/>,<UpcomingProducts/>,<Footer/>]}/>
         <Route path='/acquisition' element={[<NavBar/>,<AcquisitionPartner/>,<Footer/>]}/>
         <Route path='/faq' element={[<NavBar/>,<FAQ/>,<Footer/>]}/>
         <Route path='/gro' element={[<NavBar/>,<GROFile/>,<Footer/>]}/>
         <Route path='/terms' element={[<NavBar/>,<TermsCondition/>,<Footer/>]}/>
         <Route path='/privacy' element={[<NavBar/>,<PrivacyPolicy/>,<Footer/>]}/>
         <Route path='/support' element={[<NavBar/>,<Support/>,<Footer/>]}/>
         <Route path='/score' element={[<NavBar/>,<PageCreditScore/>,<Footer/>]}/>
         <Route path='/experianterms' element={[<NavBar/>,<ExperianTerms/>,<Footer/>]}/>
         <Route path='/lending' element={[<NavBar/>,<LendingPartner/>,<Footer/>]}/>

         <Route path='/personal loan' element={<BasicForm/>}/>
         <Route path='/secondf' element={<SecondPage/>}/>
         <Route path='/thirdf' element={<ThirdPage/>}/>
         <Route path='/fourf'element={<FourthPage/>}/>
         
         
         <Route path='/dialog' element={<DialogC/>}/>
         <Route path='/popup' element={<Popup/>}/>
         <Route path='/thirdpopup' element={<ThirdPopup/>}/>
         <Route path='/submit' element={<SubmitPopup/>}/>
         <Route path='/loader' element={<Loader/>}/>
         <Route path='/con' element={<ConfettiComponent/>} />
         <Route path='/sucess' element={<SuccessPage/>}/>
        
         <Route path='/personal loan/shopping' element={<ShoppingLoan/>}/>
        <Route path='/personal loan/emergency' element={<EmergencyLoan/>}/>
        <Route path='/personal loan/travel' element={<TravelLoan/>}/>
        <Route path='/personal loan/marriage' element={<MarriageLoan/>} />

        <Route path='/creditcard' element={<FirstPage/>}/>
        <Route path='/secondpage' element={<SecondFormPage/>}/>
        <Route path='/loaderpage' element={<LoaderPage/>}/>
        <Route path='/list' element={<ListPage/>}/>
        <Route path='/dialogb' element={<Dialogbox/>}/>

        {/* Here We will add the routing for NewPersonalLoan Pages */}

        <Route path='/NewPersonalLoan' element={<MainComponent/>}/>
        <Route path='/NewPersonalLoan/bankname' element={<BankName/>}/>
       
        {/* Routing for New Personal Loan ends here*/}

        </Routes>
        </UserProvider>

      </main>
    </>
  );
}

export default App;
 