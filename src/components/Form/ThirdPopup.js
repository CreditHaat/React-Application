import  { useState, useEffect } from 'react';
import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function IconStepper() {

  const [open,setOpen] = React.useState(false);
  const [stepperColor, setStepperColor] = useState('orange','green'); // State to manage stepper color

  const navigate=useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
    setStepperColor(randomColor()); 
   
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/fourf')
  };

  
  useEffect(() => {
   
    
    // Close the dialog after 4 seconds
    const timeout = setTimeout(() => {
      handleClose();
    }, 2000);

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  },); // useEffect will run when audioPlayed changes

  const randomColor = () => {
    const colors = ['orange']; // You can add more colors if needed
    return colors[Math.floor(Math.random() * colors.length)];
  };


  return (
    <div>
    <Dialog 
    open={handleClickOpen}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
    PaperProps={{ sx: { borderRadius: "10px" ,minWidth:'350px',maxWidth:'600px' },}}
  >
    <DialogContent>
    <Stepper
      size="lg"
      sx={{
        width: '100%',
        maxWidth: 'auto',
        minWidth: 400,
        '--StepIndicator-size': '3rem',
        '--Step-connectorInset': '0px',
        [`& .${stepIndicatorClasses.root}`]: {
          borderWidth: 3,
        },
        [`& .${stepClasses.root}::after`]: {
          height: 4,
        },
        [`& .${stepClasses.completed}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            borderColor: 'blueviolet',
            color: 'blueviolet',
          },
          '&::after': {
            bgcolor: 'blueviolet',
          },
        },
        [`& .${stepClasses.active}`]: {
          [`& .${stepIndicatorClasses.root}`]: {
            borderColor: stepperColor, // Set the stepper color dynamically
            color:stepperColor,
          },
        },
        [`& .${stepClasses.disabled} *`]: {
          color: stepperColor,
          borderColor: stepperColor,

        },
        '@media (max-width: 600px)': {
            minWidth: 'unset',
            alignItems: 'center',
            '& .MuiStep-root': {
              width: '100%',
              maxWidth: 'unset',
            },
          },
      }}
    >
      <Step
        orientation="vertical"
        completed
        indicator={
          <StepIndicator variant="outlined" color='primary'>
            <PermContactCalendarIcon />
          </StepIndicator>
        }
      />
      <Step
        orientation="vertical"
        completed
        indicator={
          <StepIndicator variant="outlined" color="primary">
            <ArticleIcon />
          </StepIndicator>
        }
      />
      <Step
        orientation="vertical"
        completed
        indicator={
          <StepIndicator variant="outlined" color="primary">
            <MarkunreadIcon />
          </StepIndicator>
        }
      />
      <Step
        orientation="vertical" 
        active
        indicator={
          <StepIndicator variant="outlined" color="primary">
            <WorkIcon />
          </StepIndicator>
        }
      >
      </Step>
      <Step
        orientation="vertical" 
         disabled
        indicator={
          <StepIndicator variant="outlined" color="primary">
            <DoneIcon fontSize='large'/>
          </StepIndicator>
        }
      >
      </Step>
    </Stepper>
    <Typography variant="body1" align="center" sx={{ mt: 1, color: 'orange', marginLeft:'44%'  }}>75 %</Typography>
    </DialogContent>  
  </Dialog>
   </div>
  );
    }