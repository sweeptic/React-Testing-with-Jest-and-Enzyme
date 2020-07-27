// setup file
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import App from './App'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders without error ', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
})


test('renders increment button ', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
})


test('renders counter display ', () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
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
