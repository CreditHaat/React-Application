import React from 'react'
import a from '../../images/Incred.png';
import b from '../../images/finanace.png';
import c from '../../images/prefer-1.png';
import d from '../../images/tata-img.png';

const Partner = () => {
  return (
    <>
        <section class="container usp-home text-center">
                    <div class="row text-center" style={{marginLeft:"0px",marginRight:"0px"}}>
                     <div class="col-md-12">
            <div class="faq-main">
                <div class="faq-main_home"><h1>50+ Partner lenders including</h1></div>
                 </div>
                 <br/>
                    </div>
                  
                    <div class="col-md-6">
                                <div class="row" style={{marginLeft:"0px",marginRight:"0px",
                                justifyContent:"center",flexDirection:'row'}}>
                                    <img  src={b} 
                                    style={{width:"100px", height:"50px", marginRight:"%"}}  viewBox="0 0 16 16"/>
                                    &nbsp;&nbsp;
                                    <img  src={d} 
                                    style={{width:"110px", height:"40px",marginLeft:"30%"}} viewBox="0 0 16 16"/>
                                </div>
                                </div>
                                <br/><br/>
                           <div class="col-md-6">
                                <div class="row" style={{marginLeft:"0px",marginRight:"0px",
                                justifyContent:"center",flexDirection:'row'}}>
                                <img  src={c}
                                style={{width:"110px", height:"60px", marginRight:"30%"}} viewBox="0 0 16 16"/>
                                &nbsp;&nbsp;
                                 <img  src={a} 
                                  style={{width:"100px" ,height:" 45px"}} viewBox="0 0 16 16"/>
                                </div>
                            </div>
                           
                        </div>
         </section>
    </>
  )
}

export default Partner