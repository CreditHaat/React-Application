// GridContainer.js

import React from 'react';
import styles from './NewFooter.module.css'; // Import CSS module for styling

const GridContainer = () => {
  return (
    <footer style={{backgroundColor:"#F2EDFF80",marginTop:"10px",paddingTop:"10px",paddingBottom:"10px"}}>

<div className={styles.gridContainer}>
      {/* Grid items (columns) */}
      {/* <div className={styles.gridItem}>All rights reserved</div> */}
      <div onClick={() => { window.location.href = "https://www.credithaat.com/tnc" }} className={styles.gridItem}>Terms of service</div>
      <div onClick={() => { window.location.href = "https://www.credithaat.com/privacy" }} className={styles.gridItem}>Privacy policy</div>
      <div onClick={() => { window.location.href = "https://www.credithaat.com/support" }} className={styles.gridItem}>Support</div>
      {/* <div className={styles.gridItem}>&#169;2022 CreditHaat.</div> */}
    </div>
    {/* &#169;2022 CreditHaat. */}
    <div className={styles.gridItem}>&#169;2024 CreditHaat.</div>
    </footer>
    
  );
};

export default GridContainer;
