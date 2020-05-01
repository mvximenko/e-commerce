import React from 'react';
import './CustomButtonStyles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'googleSignIn' : ''} CustomButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;