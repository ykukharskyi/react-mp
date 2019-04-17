import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe("Button", () => {
  it("primary", () => {
    const wrapper = shallow(<Button theme="primary" title="Search" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("secondary", () => {
    const wrapper = shallow(<Button theme="secondary" title="Search" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("transparent", () => {
    const wrapper = shallow(<Button theme="transparent" title="release date" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("primary small", () => {
    const wrapper = shallow(<Button theme="primary-small" title="title" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("primary small grey", () => {
    const wrapper = shallow(<Button theme="primary-small-grey" title="title" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
