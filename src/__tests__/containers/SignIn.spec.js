import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../../containers/SignIn/SignIn';

describe('SignIn', () => {
  it('Should correctly save snapshot of the SignIn page', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
  });
});
