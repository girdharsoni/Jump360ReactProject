import React, { useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RestCard from './RestorentCard'
import data from '../Data/RestorentData/RestorentData.json'
//import imagesPath from './images'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const EndUserRestorentView = (props) => {
  const classes = useStyles();
  console.log(props);
  
    
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
          Welcome Back
        </Typography>
        <br />
        <br />
        <Grid
          container
          spacing={3}>
            {
              data.map((el, index)=>{
                  return(
                    <Grid container item xs={4} style={{ fontFamily: 'uiRounded' }} key={index.toString()}>
                        <RestCard
                        image={el.imagePath}
                        data={el}
                        />
                    </Grid>
                  )
              })
            }
        </Grid>
      </Container>
    </div>
  );
}

export default EndUserRestorentView;