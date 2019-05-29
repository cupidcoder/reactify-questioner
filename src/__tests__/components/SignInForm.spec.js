import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from '../../components/SignInForm/SignInForm';

describe('SignInForm', () => {
  it('Should correctly save snapshot of the SignInForm', () => {
    const wrapper = shallow(<SignInForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
