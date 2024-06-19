import React, { useState } from 'react';
import './FormPageCarousel.css'; // Import your CSS file for styling
// import NewFormPageImage from '../NewPersonalLoanImages/NewFormPageImage.png';sdfsdas
// import NewFormPageImage2 from '../NewPersonalLoanImages/FormPageImage2 (2).png';
import NewFormPageImage from '../NewPersonalLoanImages/NewFormPageImage.png';
import NewFormPageImage2 from '../NewPersonalLoanImages/FormPageImage2.png';
import NewFormPageImage3 from '../NewPersonalLoanImages/FormPageImage3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import NewFormPageImage from '../NewPersonalLoanImages/FormPage1.png';


const Carousel = ({ images }) => {

    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={NewFormPageImage3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={NewFormPageImage2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={NewFormPageImage} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
};

export default Carousel;
