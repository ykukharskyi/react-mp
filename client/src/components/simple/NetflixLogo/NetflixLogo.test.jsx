import React from 'react';
import { shallow } from 'enzyme';
import NetflixLogo from './NetflixLogo';

describe('NetflixLogo', () => {
  it('default render', () => {
    const wrapper = shallow(<NetflixLogo />);
    expect(wrapper).toMatchSnapshot();
  });
});
