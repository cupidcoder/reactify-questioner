import React from 'react';
import { shallow } from 'enzyme';
import UserStatFeed from '../../components/UserStatFeed/UserStatFeed';

describe('UserStatFeed', () => {
  it('Should correctly save snapshot of the UserStatFeed', () => {
    const wrapper = shallow(<UserStatFeed />);
    expect(wrapper).toMatchSnapshot();
  });
});
