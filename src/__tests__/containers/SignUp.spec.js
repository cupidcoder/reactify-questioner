import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../../containers/SignUp/SignUp';

describe('SignUp', () => {
  it('Should correctly save snapshot of the SignUp page', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot();
  });
});
