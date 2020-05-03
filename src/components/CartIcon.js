import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cartActions';
import { selectCartItemsCount } from '../redux/cart/cartSelectors';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import './CartIconStyles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='CartIcon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shoppingIcon' />
    <span className='itemCount'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);