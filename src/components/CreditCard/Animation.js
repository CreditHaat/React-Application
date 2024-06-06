import React from 'react'
import a from '../../images/Frame 48095781.png';
import './Animation.css';

const Animation = () => {
  return (
    <>
   
   <div class="animation-container" >
        <div class="logo-container">
            <img src={a} alt="Logo" />
        </div>
        <div class="circle circle-top"></div>
        <div class="circle circle-left"></div>
    </div>
    </>
  )
}

export default Animation