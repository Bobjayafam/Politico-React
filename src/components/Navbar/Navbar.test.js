import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

it('should render Navbar component', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper.find('li').length).toBe(3);
});
