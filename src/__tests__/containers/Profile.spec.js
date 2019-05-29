import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../containers/Profile/Profile';

describe('Profile', () => {
  it('Should correctly save snapshot of the Profile page', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });
});
