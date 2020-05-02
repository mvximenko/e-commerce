import React from 'react';
import './CustomButtonStyles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'googleSignIn' : ''
    } CustomButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;