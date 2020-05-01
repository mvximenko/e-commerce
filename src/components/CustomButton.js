import React from 'react';
import './CustomButtonStyles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className='CustomButton' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;