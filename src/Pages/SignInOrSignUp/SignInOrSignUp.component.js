import React from 'react';
import LOGO from '../../Assets/LOGO.svg';
import SignIn from '../../Components/SignIn/SignIn.component';
import './SignInOrSignUp.styles.scss'

const SignInOrSignUp = () => {
  return (
   <div className="SignInOrSignUp-page">
    <img src={LOGO} class="logo" alt="company logo" />
    <div className="company-title">REgreen</div>
    <h1 className="SignInOrSignUp-title">Helping Make a Greener NYC for Tomorrow, Today</h1>
    <SignIn />
    
    </div>
  );
};

export default SignInOrSignUp;
