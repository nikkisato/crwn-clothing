import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className='collection-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>${price}</span>
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to Cart
        </CustomButton>
      </div>
    </div>
  );
};
// const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
