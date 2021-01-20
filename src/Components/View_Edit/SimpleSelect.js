import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  const [val, setVal] = React.useState([])
  const { handleVal, name, preval } = props
  const handleChange = (event) =>{
    setVal(event.target.value)
    handleVal(event.target.value)
  }


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
      type={name == "Contact Number" ?  "number" : "text"}
      value={preval}
      onChange={handleChange}
      id="outlined-basic" 
      label={name}
      variant="outlined" />
    </form>
  );
}