import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const { submit } = props
  const [menu, setMenu] = React.useState();
  const [disc, setDisc] = React.useState();

  const handleMenu = (event) =>{
    setMenu(event.target.value)
  }

  const handleDisc = (event) =>{
    setDisc(event.target.value)
  }

  const done = () => {
      if(menu && disc){
        submit(menu,disc)
      }else{
          alert(" Fill values properly");
      }
    
  }


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
       value={menu}
       onChange={handleMenu}
       type="text"
       id="standard-basic"
       label="Menu" />
      <TextField 
      value={disc}
      onChange={handleDisc}
      type="text"
      id="standard-basic"
      label="Discription" />
      <br/>
      <IconButton variant="contained" color="primary" onClick={done}>
       <CheckCircleIcon/>
      </IconButton>
    </form>
  );
}
