import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cartSelectors';
import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/StripeCheckoutButton';
import './CheckoutPageStyles.scss';

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
    <div className='total'>TOTAL: ${total}</div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);