import React from 'react';
import './SignInAndSignUpPageStyles.scss';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignInAndSignUpPage = () => (
  <div className='SignInAndSignUpPage'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;