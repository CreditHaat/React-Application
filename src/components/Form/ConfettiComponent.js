import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/ContextFile';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ConfettiComponent = () => {

  const { user, updateUser } = useContext(UserContext);
  const [posts, setPosts] = useState([]); // State to store multiple data objects

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        const no=sessionStorage.getItem('userPhoneNumber');
        formData.append('userPhoneNumber', no);
      
        const response = await axios.post('http://localhost:8080/productlist', formData);

        if (response.data.code === 2) {
          const list = response.data.obj;
          setPosts([list]);
       //   setListResponse(list.productName); // Store the productName in listResponse
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [user]); // Include user in dependency array to fetch data when user changes

  console.log('Post:', posts); 
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
    
    <div className="container">
      <div className="background" />
      <div className="wrapper">
        {Array.from({ length: 150 }, (_, i) => (
          <div key={i} className={`confetti-${i}`} />
        ))}

        <div style={{ textAlign: 'center', marginTop: '6%', fontFamily: 'Raleway' }}>
          <Typography style={{ display: 'inline-block', color: 'blueviolet' ,fontWeight:500}} variant='h5'>
            Congrats...
          </Typography>
          <Typography style={{ display: 'inline-block' }} variant='h5'>
            You are eligible for below listed offers
          </Typography>
        </div>
      </div>
      <div>
      {posts.map((post, index) => (
      <Card key={index} sx={{ maxWidth: {sm:'auto',md:'auto',lg:800},borderRadius:'10px',marginTop:'10px'}}>
      
     <img src={post.logo} style={{height:100,width:100}} />
     <br/>
     <br/>
     <div style={{ display: 'flex', justifyContent: 'space-between',gap:'20px'}}>
  <div style={{ width: '50%', paddingLeft: '12px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px', background: '#F2F2F2', borderRadius: '30px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
    <div style={{ color: 'black', fontSize: '12px', fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Business Loan</div>
  </div>
  <div style={{ width: '50%', paddingLeft: '12px', paddingRight: '12px', paddingTop: '8px', paddingBottom: '8px', background: '#F2F2F2', borderRadius: '30px', justifyContent: 'center', alignItems: 'center', gap: '10px', display: 'flex' }}>
    <div style={{ color: 'black', fontSize: '12px', fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>SME Finance</div>
  </div>
</div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'Times New Roman',fontWeight:600}}>
        {post.productName} {/* Displaying productName */}
        </Typography>
        <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
       <Typography style={{opacity:'0.7',fontWeight:600,fontFamily:'Times New Roman'}}>Loan Amount</Typography>
       <p>₹1,00,000 - ₹75,00,000</p>
       </div>
       <div style={{ flex: 1 }}>
       <Typography style={{opacity:'0.7',fontWeight:600,fontFamily:'Times New Roman'}}>Loan Interest Monthly</Typography>
       <p>Starting at 1.5%</p>
  </div>
</div>
<div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
        <Typography style={{opacity:'0.7',fontWeight:600,fontFamily:'Times New Roman'}}>Process time</Typography>
       <p>With in 48 Hours</p>
       </div>
       <div style={{ flex: 1 }}>
       <Typography style={{opacity:'0.7',fontWeight:600,fontFamily:'Times New Roman'}}>Tenure</Typography>
       <p>12 to 60 Months</p>
  </div>
</div>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small" style={{background:'blueviolet',borderRadius:'10px'}} fullWidth LinkComponent={Link} to={post.applink}>Install</Button>
        <Button size="small" style={{borderRadius:'10px',background:'#80808057',color:'white'}} fullWidth LinkComponent={Link} to='https://loan.credithaat.com/hicredit/apply?cpi=undefined'>Known More</Button>
      </CardActions>
       
    </Card>
     ))}
    </div>
    </div>
  );
}

export default ConfettiComponent;
