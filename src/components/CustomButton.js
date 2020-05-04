import React from 'react';
import { CustomButtonContainer } from './CustomButtonStyles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;