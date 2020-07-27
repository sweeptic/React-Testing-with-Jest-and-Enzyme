// setup file
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders without error', () => {

  const wrapper = shallow(<App />);
  console.log(wrapper.debug());

  //tbt
  expect(wrapper).toBeTruthy();

  //tbf
  // expect(wrapper).toBeFalsy();
});
