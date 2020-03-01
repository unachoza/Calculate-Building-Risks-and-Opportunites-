import React from 'react';
import './SignUp.styles.scss';
import LOGO from '../../Assets/LOGO.svg';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../Components/SignIn/signIn.styles.scss';
import CustomButton from '../../Components/CustomButton/CustomButton.component';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '600px',
    marginBottom: '40px',
  },
});

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className="SignInOrSignUp-page">
      <img src={LOGO} class="logo" alt="company logo" />
      <div className="company-title">REgreen</div>
      
      <FormControl>
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value=""
          feildWidth={60}
        />
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value=""
          feildWidth={60}
        />
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value=""
          type="password"
          feildWidth={60}
        />
        <TextField
          className={classes.root}
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
          type="password"
          value=""
        />
        <CustomButton>Sign Up</CustomButton>
      </FormControl>
    </div>
  );
};

export default SignUp;
