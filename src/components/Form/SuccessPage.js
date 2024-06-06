import React, { useEffect } from 'react'
import { Button, Divider } from '@mui/material'
import Animation from './Animation'
import { Link, json } from 'react-router-dom'

const SuccessPage = () => {

    // Retrieve the data from sessionStorage
    const storedUserData = sessionStorage.getItem('sucessData');
    const mydata = JSON.parse(storedUserData);
    console.log(mydata);
    console.log(mydata.logo);

    useEffect(() => {
      // Generate confetti CSS dynamically
      let css = '';
      const colors = ['#d13447', '#ffbf00', '#263672', '#7b2cbf', '#2eb67d', '#ff7f50', '#6495ed', '#ffd700', '#ff69b4', '#32cd32']; // Add more colors here
  
      for (let i = 0; i <= 150; i++) {
        const width = Math.random() * 8;
        const height = width * 0.4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const top = '-10%';
        const left = `${Math.random() * 100}%`;
        const opacity = Math.random() + 0.5;
        const rotation = Math.random() * 360;
        const animationDuration = 4 + Math.random();
        const animationDelay = Math.random();
  
        css += `
          .confetti-${i} {
            width: ${width}px;
            height: ${height}px;
            background-color: ${color};
            top: ${top};
            left: ${left};
            opacity: ${opacity};
            transform: rotate(${rotation}deg);
            animation: drop-${i} ${animationDuration}s ${animationDelay}s infinite;
            position: absolute;
          }
          .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(#ffdd9d4d, #b385f091); /* Specify the linear gradient */
            z-index: -1;
          }
          @keyframes drop-${i} {
            100% {
              top: 110%;
              left: calc(${left} + ${Math.random() * 15}%);
            }
          }
        `;
      }
  
      // Create a style element and add generated CSS to it
      const style = document.createElement('style');
      style.appendChild(document.createTextNode(css));
      document.head.appendChild(style);
  
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      // No cleanup function needed
    }, []);


  return (
    <>
    <div style={{ 
        background: 'linear-gradient(rgb(255 221 157 / 9%), rgb(179 133 240 / 27%))',
        height: '100vh', // Set height of the div to fill the viewport
        overflow: 'hidden' // Prevent overflow
      }}>  
        <div style={{background:'#ffe195',height:310}}>
        <Animation/>
      <div className="wrapper">
        {Array.from({ length: 150 }, (_, i) => (
          <div key={i} className={`confetti-${i}`} />
        ))}
      </div>
    <h1 style={{fontFamily:'Raleway',textAlign:'center',fontWeight:600}}>
        Congratulations
    </h1>
    <p style={{fontFamily:'Raleway',textAlign:'center'}}>
        Congratulations..! Your loan application has been successfully submitted.
    </p>
    </div>
    <div style={{ 
  background: 'white',
  width: '80%',
  borderRadius:'10px',
  margin: 'auto',
  marginTop: '-50px',
  display: 'flex',
  flexDirection: 'column', // Arrange children vertically
  alignItems: 'center', // Center children horizontally
  justifyContent: 'center', // Center children vertically
  padding: '20px' // Add some padding for better spacing
}}>
  <img src={mydata.logo} alt='logo' style={{ marginBottom: '10px' , width:100}} /> {/* Adjust margin-bottom as needed */}
  <h3 style={{fontFamily:'Raleway',fontWeight:600}}>{mydata ? mydata.product:''}</h3>
  <Divider style={{ borderWidth: '1px' ,backgroundColor: 'black',width:'90%'}} />
  <p style={{fontFamily:'Raleway',marginTop:'20px'}}>You are pre-approved for</p>
  <h3 style={{fontFamily:'Raleway',fontSize:'18px',fontWeight:600}}>Max-Loan Amount-{mydata ? mydata.amount:''}</h3>
  <Button variant='contained' LinkComponent={Link} to={mydata ? mydata.url:''} style={{backgroundColor:'#9747ff',width:'90%',marginTop:'20px',height:'45px',fontWeight:600,textTransform:'capitalize'}} >Continue</Button>
</div>
 </div>
    </>
  )
}

export default SuccessPage