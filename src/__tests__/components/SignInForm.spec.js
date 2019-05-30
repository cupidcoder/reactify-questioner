import React from 'react';
import { shallow } from 'enzyme';
import { SignInForm } from '../../components/SignInForm/SignInForm';

describe('SignInForm', () => {
  const wrapper = shallow(<SignInForm />);
  it('Should correctly save snapshot of the SignInForm', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('correctly sets state for email input', () => {
    const input = wrapper.find('input').at(0);
    input.value = 'test@example.com';
    const mockedInputEvent = {
      target: {
        id: 'email',
        value: 'test@example.com'
      }
    };
    input.simulate('change', mockedInputEvent);
    expect(wrapper.state().email).toEqual('test@example.com');
  });
  it('correctly sets state for password input', () => {
    const input = wrapper.find('input').at(1);
    input.value = '123456789m';
    const mockedInputEvent = {
      target: {
        id: 'password',
        value: '123456789m'
      }
    };
    input.simulate('change', mockedInputEvent);
    expect(wrapper.state().password).toEqual('123456789m');
  });
  it('correctly sets state when email is invalid', () => {
    const input = wrapper.find('input').at(0);
    input.value = 'test@gm';
    const mockedInputEvent = {
      target: {
        id: 'email',
        value: 'test@gm'
      }
    };
    input.simulate('keyup', mockedInputEvent);
    expect(wrapper.state().emailError).toEqual('Email is invalid');
    expect(wrapper.state().isEmailValid).toEqual(false);
  });
  it('correctly sets state when password is invalid', () => {
    const input = wrapper.find('input').at(1);
    input.value = '123456';
    const mockedInputEvent = {
      target: {
        id: 'password',
        value: '123456'
      }
    };
    input.simulate('keyup', mockedInputEvent);
    expect(wrapper.state().passwordError).toEqual('Should be alphanumeric and atleast 8 characters long');
    expect(wrapper.state().isPasswordValid).toEqual(false);
  });
  it('should not render the spinner when rendering isLoading is true', () => {
    const props = {
      isLoading: true
    };
    const SignInWrapper = shallow(<SignInForm {...props} />);
    expect(SignInWrapper.find('Spinner')).toHaveLength(1);
  });
  it('should not render the spinner when rendering isLoading is false', () => {
    const props = {
      isLoading: false
    };
    const SignInWrapper = shallow(<SignInForm {...props} />);
    expect(SignInWrapper.find('Spinner')).toHaveLength(0);
  });
});
