import React, { useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddRestorent from '../View_Edit/Modal'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const View = (props) => {
  const classes = useStyles();
  

  const submitMenu = (menu, dis) =>{
    console.log(menu, dis);
  }

  const allMenu = props.location.query.data.menu.map((el, index) => {
    return(
      <Accordion
      key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>{el.menuName}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{el.discription}
      </Typography>
        </AccordionDetails>
      </Accordion>
    )
  })

  useEffect(() => {
    
  }, []);

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

      <Container>
       
        <Typography style={{ fontWeight: 'bold', fontSize: '21px', fontFamily: 'uiRounded' }}>
          Restorent Details
        </Typography>
        <br />
        <br />
        <Grid
          container
          spacing={3}>
          <Grid container item xs={6} style={{ fontFamily: 'uiRounded' }}>
          <Grid item xs={3}>
              <Typography style={{ fontWeight: 'bold', fontFamily: 'uiRounded' }}>
                Name 
              </Typography>
              <br/>
              <Typography style={{ fontWeight: 'bold', fontFamily: 'uiRounded' }}>
              Address 
              </Typography>
              <br/>
              <Typography style={{ fontWeight: 'bold', fontFamily: 'uiRounded' }}>
              Contact Name 
              </Typography>
              <br/>
              <Typography style={{ fontWeight: 'bold', fontFamily: 'uiRounded' }}>
              Contact Number 
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>
              {props.location.query.data.restaurantName}
              </Typography>
              <br/>
              <Typography>
                {props.location.query.data.address}
              </Typography>
              <br/>
              <Typography>
                {props.location.query.data.contactName}
              </Typography>
              <br/>
              <Typography>
                {props.location.query.data.contactNumber}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={6} style={{ fontFamily: 'uiRounded' }}>
            <Grid item xs={1}> 
            <h1 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '21px', fontFamily: 'uiRounded' }}>
              Menu
            </h1>
            </Grid>
            <Grid item xs={1} style={{ marginTop:'0px'}}>
            <AddRestorent
            EndSubmit={submitMenu}
            />
            </Grid>
            <br />
            <div className={classes.root}>
              {
               allMenu
              }
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default View;