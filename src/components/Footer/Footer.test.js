import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('should render Footer component', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('span').length).toBe(1);
});
