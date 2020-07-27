// setup file
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });




test('renders without error', () => {
  // const div = document.createElement('div');
  render(<App />);
  // ReactDOM.unmountComponentAtNode(div);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  // throw new Error;
});
