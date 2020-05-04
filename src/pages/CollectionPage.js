import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../components/CollectionItem';
import { selectCollection } from '../redux/shop/shopSelectors';
import './CollectionPageStyles.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='CollectionPage'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);