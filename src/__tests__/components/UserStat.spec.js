import React from 'react';
import { shallow } from 'enzyme';
import UserStat from '../../components/UserStat/UserStat';

describe('UserStat', () => {
  it('Should correctly save snapshot of the UserStat', () => {
    const wrapper = shallow(<UserStat />);
    expect(wrapper).toMatchSnapshot();
  });
});
