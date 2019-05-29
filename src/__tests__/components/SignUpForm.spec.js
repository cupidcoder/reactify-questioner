import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

describe('SignUpForm', () => {
  it('Should correctly save snapshot of the SignUpForm', () => {
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
