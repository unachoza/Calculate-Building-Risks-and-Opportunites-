import React from 'react';
import { FormControl, FormLabel, FormHelperText, TextField, Input, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './signIn.styles.scss';
import CustomButton from '../CustomButton/CustomButton.component';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '600px',
    marginBottom: '40px',
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <div className="form">
      <FormControl>
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value=""
          feildWidth={60}
        />
        <TextField className={classes.root} id="outlined-basic" label="Password" variant="outlined" value="" />
        <CustomButton>Login</CustomButton>
        <Link to="/signUp" className="sign-up-text">
          Sign Up
        </Link>
      </FormControl>
    </div>
  );
};

export default Form;
