import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { SignInAndSignUpContainer } from './SignInAndSignUpPageStyles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;