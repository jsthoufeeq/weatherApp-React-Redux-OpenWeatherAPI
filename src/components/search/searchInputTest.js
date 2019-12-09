import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './searchInput';

describe('Search Input component', () => {
  it('starts with an input', () => {
    const wrapper = shallow(<SearchInput />);
    const text = wrapper.find('input').placeholder;
    expect(text).toEqual('Type the name of a city');
  });
});
