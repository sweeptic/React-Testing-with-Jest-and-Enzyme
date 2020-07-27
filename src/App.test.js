// setup file
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders without error ', () => {

})


test('renders increment button ', () => {

})


test('renders counter display ', () => {

})

test('counter starts at 0 ', () => {

})


test('clicking button increments counter display', () => {

})


// test('renders without error', () => {
//   const wrapper = shallow(<App />);
//   console.log(wrapper.debug());
//   expect(wrapper).toBeTruthy();
// });
