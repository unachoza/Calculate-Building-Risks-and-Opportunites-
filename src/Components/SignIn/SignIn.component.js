import React from 'react';
import { FormControl, FormLabel, FormHelperText, TextField, Input, InputLabel } from '@material-ui/core';
import './SignIn.styles.css';
import CustomButton from '../CustomButton/CustomButton.component'

const Form = () => (
 <div className="form">
 
  <FormControl>
    <TextField id="outlined-basic" label="Email" variant="outlined" value="" />
   <TextField id="outlined-basic" label="Password" variant="outlined" value="" />
  <CustomButton>Login</CustomButton>
   
  </FormControl>
 </div>
 
 
);

export default Form;
