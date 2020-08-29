import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

it('should render CartItem component', () => {
  let wrapper;
  const mockItem = {
    imageUrl: 'www.testImage.com',
    price: 10,
    name: 'hats',
    quantity: 2,
  };
  wrapper = shallow(<CartItem item={mockItem} />);
  expect(wrapper.debug()).toMatchSnapshot();
});
