import React, { useState, useEffect } from 'react';
import { Grid, Button, Container } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import Typography from '@material-ui/core/Typography';
import 'react-toastify/dist/ReactToastify.css';
import SimpleSelect from "../View_Edit/SimpleSelect"
const Edit = (props) => {
  console.log(props);

  const [name, setName] = useState(props.location.query.data.restaurantName);
  const [address, setAddress] = useState(props.location.query.data.address);
  const [contactName, setContactName] = useState(props.location.query.data.contactName);
  const [countNumber, setCountNumber] = useState(props.location.query.data.contactNumber);

  const handleName = (event) =>{
    console.log(event);
    setName(event);
  }
  
  const handleAddress = (event) =>{
    setAddress(event)
  }

  const handleContactName = (event) =>{
    setContactName(event)
  }

  const handleCountNumber = (event) =>{
    setCountNumber(event)
  }

  const Submit = ()  => {
    console.log(name, address, contactName, countNumber )
    if(name  && address  && contactName && countNumber ){
      console.log('Submited Form');
      console.log(name, address, contactName, countNumber )
      toast.success(`Added successfully`)
      props.history.push('/');
    }else{
      // API integration code for submit
      alert("All values should be filled");
    }
  }
  useEffect(() => {
   
  },[]);

  return (
    <div>
       <ToastContainer
        position='top-right'
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        autoClose={4000}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover>
      </ToastContainer>
      <Container maxWidth='md'>
      <Typography style={{ fontWeight: 'bold', fontSize: '21px', fontFamily: 'uiRounded' }}>
         Edit Restorent Details
        </Typography>
        <br />
        <br />
        <Grid
          container
          >
            <Grid item xs={1} style={{ fontFamily: 'uiRounded' }}>
              <Typography style={{ fontWeight: 'bold', fontFamily: 'uiRounded', marginTop:'18px' }}>
                Name 
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ fontFamily: 'uiRounded' }}>
              <SimpleSelect
               handleVal={handleName}
               name={'Name'}
               preval={name}
              />
            </Grid>
            <Grid item xs={1} style={{ fontFamily: 'uiRounded' }}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'uiRounded', marginTop:'18px' }}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ fontFamily: 'uiRounded' }}>
              <SimpleSelect
              handleVal={handleAddress}
              name={'Address'}
              preval={address}
              />
            </Grid>
            <Grid item xs={4} style={{ fontFamily: 'uiRounded' }}></Grid>
            <Grid item xs={1} style={{ fontFamily: 'uiRounded' }}>
              <Typography style={{ fontWeight: 'bold', fontFamily: 'uiRounded', marginTop:'18px' }}>
                Contact Name
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ fontFamily: 'uiRounded' }}>
              <SimpleSelect
               handleVal={handleContactName}
               name={'Contact Name'}
               preval={contactName}
              />
            </Grid>
            <Grid item xs={1} style={{ fontFamily: 'uiRounded' }}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'uiRounded', marginTop:'18px' }}>
              Contact Number
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ fontFamily: 'uiRounded' }}>
              <SimpleSelect
              handleVal={handleCountNumber}
              name={'Contact Number'}
              preval={countNumber}
              />
            </Grid>
            
          </Grid>
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={Submit} disableElevation>
            Submit
          </Button>
      </Container>
    </div>
  );
}

export default Edit;