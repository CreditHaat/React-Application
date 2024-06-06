import React from 'react'
import a from '../../images/yes_bank-1.png';
import b from '../../images/asus.png';
import c from '../../images/first.jpg';


const CreditP = () => {
  return (
    <>
    <section class="container usp-home text-center">
                    <div class="row text-center" style={{marginLeft:"0px",marginRight:"0px"}}>
                     <div class="col-md-12" >
            <div class="faq-main">
                <div class="faq-main_home"><h1>50+ Partner lenders including</h1></div>
                <br/>
                 </div>
                    </div>
                    
                        <div class="col-md-12">
                                <div class="row" style={{marginLeft:"0px",marginRight:"0px",justifyContent:"center",
                                 columnGap:"100px",rowGap:"10px",flexDirection:'row'}}>
                                    <img  src={a} style={{width:"100px", height:"50px"}}  viewBox="0 0 16 16"/>
                                    <img  src={b} style={{width:"110px", height:"40px"}} viewBox="0 0 16 16"/>
                                <img  src={c} style={{width:"130px", height:"55px"}} viewBox="0 0 16 16"/>
                                </div>
                                </div>
                                
                           <div class="col-md-6" style={{marginLeft:"0px",marginRight:"0px",justifyContent:"center"}}>
                                <div class="row" style={{marginLeft:"0px",marginRight:"0px",justifyContent:"center"}}>
                               
                                </div>
                            </div>
                           
                        </div>
                </section>     
    </>
  )
}

export default CreditP