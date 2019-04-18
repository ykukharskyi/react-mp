import React from 'react';
import { shallow } from 'enzyme';
import InputField from './InputField';

describe('InputField', () => {
  it('default render', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper).toMatchSnapshot();
  });

  it('with placeholder', () => {
    const wrapper = shallow(<InputField placeholder="hi there" />);
    expect(wrapper).toMatchSnapshot();
  });
});
