import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
import './CartDropdownStyles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='CartDropdown'>
    <div className='cartItems'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);