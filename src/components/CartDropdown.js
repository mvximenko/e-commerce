import React from 'react';
import CustomButton from './CustomButton';
import './CartDropdownStyles.scss';

const CartDropdown = () => (
  <div className='CartDropdown'>
    <div className='cartItems'>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;