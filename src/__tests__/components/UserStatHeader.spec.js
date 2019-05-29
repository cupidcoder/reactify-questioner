import React from 'react';
import { shallow } from 'enzyme';
import UserStatHeader from '../../components/UserStatHeader/UserStatHeader';

describe('UserStatHeader', () => {
  it('Should correctly save snapshot of the UserStatHeader', () => {
    const wrapper = shallow(<UserStatHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
