import React from 'react';
import LOGO from '../../Assets/LOGO.svg';
import SignIn from '../../Components/SignIn/SignIn.component';
import './SignInOrSignUp.styles.css'

const SignInOrSignUp = () => {
  return (
   <div>
    <img src={LOGO} class="logo" alt="company logo" />
    <div className="company-title">REgreen</div>
    <h1 className="SignInOrSignUp-title">Helping Make a Greener NYC for Tomorrow, Today</h1>
    <SignIn />
    
    </div>
  );
};

export default SignInOrSignUp;
