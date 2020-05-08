import React, { memo } from 'react';
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './CartItemStyles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default memo(CartItem);