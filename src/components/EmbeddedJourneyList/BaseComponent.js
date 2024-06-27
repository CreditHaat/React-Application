import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CHEmbeddedList from './CHEmbeddedList'
import Toader from '../NewPersonalLoan/Other Components/Toader'
import OTPBottomSheet from './OTPBottomSheet';

const BaseComponent = () => {

    const [CHEmbeddedListFlag, showCHEmbeddedListFlag] = useState(false);
    const [divContent, setDivContent] = useState('');
    const [lenderDetails, setLenderDetails] = useState([]);
    const [tempFlag, setTempFlag] = useState();
    const [toaderFlag, setToaderFlag] = useState(false);
    var json = null;

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const mobileNumber = params.get('mobilenumber');

    const getLendersList = async () => {

        setToaderFlag(true);


        if (!mobileNumber) {
            console.error('Mobile number not available');
            return;
        }

        try {

            const formData1 = new FormData();
            formData1.append('mobilenumber', mobileNumber);
            console.log("Inside get lenders list2 & mobileNumber is : ",mobileNumber)
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}lenderslist1`, formData1, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'Y3JlZGl0aGFhdHRlc3RzZXJ2ZXI=' // Add your token here
                }
            });

            console.log(response);

            setToaderFlag(false);

            if (response.data.code === 200) {
                console.log('Submission successful from Lenders Backend:', response.data);
                json = response.data.data;
                setLenderDetails(json);
                console.log("Recieved Data from backend ", json);

                setTempFlag(true);

            }

            if (response.status === 200) {



            } else {
                console.error('Submission failed:', response.statusText);
            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    useEffect(() => {
        getLendersList();
    }, []);

    useEffect(()=>{
        if(tempFlag === true){
        console.log(mobileNumber);    
        showCHEmbeddedListFlag(true);
        console.log("json : ",json);
        console.log("lenderDetails : ",lenderDetails);
        console.log("tempFlag : ",tempFlag);
        }
    },[tempFlag, json , lenderDetails]);

    return (
        <>
        {/* {toaderFlag && <Toader/>} */}
            {/* <div>
                {
                    
                   CHEmbeddedListFlag && <CHEmbeddedList json1={lenderDetails} mobileNumber={mobileNumber} />
                }
            </div> */}
        {<OTPBottomSheet/>}




        </>
    );
}

export default BaseComponent;