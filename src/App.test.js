import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('starts', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Weather application');
  });
});
