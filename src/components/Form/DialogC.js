import React, { useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import './FileAnimation.css';
import { Button } from '@mui/material';
import image1 from '../../images/animation10-unscreen.gif';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const DialogC = () => {
    const [open,setOpen] = React.useState(true);

    const navigate=useNavigate();
    
   useEffect(() => {
      const timer = setTimeout(() => {
          setOpen(false); // Close the dialog after 5 seconds
          navigate('/secondf'); // Redirect to '/secondf' after closing the dialog
      }, 5000);

      return () => {
          clearTimeout(timer);
      };
  }, [navigate]); // Include 'navigate' in the dependency array

    const handleClose = () => {
      setOpen(false);
    navigate('/secondf')
    }; 

  return (
    <Dialog 
    className="blink-animation"
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
   //PaperProps={{ sx: { borderRadius: "10px", animation: 'spin 1s linear infinite;', border:' 5px solid transparent;'}}}
    PaperProps={{ sx: { borderRadius: "10px"}}}

      >
     
     
    <div class="folder-icon" style={{marginTop:'20px'}}>
    <div class="folder-label"></div>
    <div class="paper-icon">
    </div>
    </div>
  
  {//<img src={image1} alt='animation' height={200} width={200} style={{margin:'auto'}}/>
}
    <DialogTitle style={{fontFamily:'Raleway',textAlign:'center',fontWeight:600,fontSize:'18px'}}>{"Some of Your information is automatically filled from Experian Database "}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description" style={{textAlign:'center',fontSize:'15px',fontFamily:'Raleway'}}>
        Please click ok to proceed further with your information...
      </DialogContentText>
     
    </DialogContent>
    
  </Dialog>
  )
}

export default DialogC