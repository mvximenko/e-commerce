import React from 'react';
import './CheckoutPageStyles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors';
import CheckoutItem from '../components/CheckoutItem';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='CheckoutPage'>
    <div className='checkoutHeader'>
      <div className='headerBlock'>
        <span>Product</span>
      </div>
      <div className='headerBlock'>
        <span>Description</span>
      </div>
      <div className='headerBlock'>
        <span>Quantity</span>
      </div>
      <div className='headerBlock'>
        <span>Price</span>
      </div>
      <div className='headerBlock'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItems) => (
      <CheckoutItem key={cartItems.id} cartItem={cartItems} />
    ))}
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);