import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

it('Landing Page renders correctly', () => {
  const wrapper = mount(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
