import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';
import { addItem } from '../redux/cart/cartActions';
import './CollectionItemStyles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='CollectionItem'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collectionFooter'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem()),
});

export default connect(null, mapDispatchToProps)(CollectionItem);