import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';

describe('SignUpForm', () => {
  const wrapper = shallow(<SignUpForm />);
  it('Should correctly save snapshot of the SignUpForm', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('correctly sets state for firstname input', () => {
    const input = wrapper.find('input').at(0);
    input.value = 'John';
    const mockedInputEvent = {
      target: {
        id: 'firstname',
        value: 'John'
      }
    };
    input.simulate('change', mockedInputEvent);
    expect(wrapper.state().firstname).toEqual('John');
  });
  it('correctly sets state for lastname input', () => {
    const input = wrapper.find('input').at(1);
    input.value = 'Doe';
    const mockedInputEvent = {
      target: {
        id: 'lastname',
        value: 'Doe'
      }
    };
    input.simulate('change', mockedInputEvent);
    expect(wrapper.state().lastname).toEqual('Doe');
  });
  it('correctly sets state for email input', () => {
    const input = wrapper.find('input').at(2);
    input.value = 'j.doe@gmail.com';
    const mockedInputEvent = {
      target: {
        id: 'email',
        value: 'j.doe@gmail.com'
      }
    };
    input.simulate('change', mockedInputEvent);
    expect(wrapper.state().email).toEqual('j.doe@gmail.com');
  });
  it('correctly sets state for password input', () => {
    const input = wrapper.find('input').at(3);
    input.value = '12345678ui';
    const mockedInputEvent = {
      target: {
        id: 'password',
        value: '12345678ui'
      }
    };
    input.simulate('change', mockedInputEvent);
    expect(wrapper.state().password).toEqual('12345678ui');
  });
  it('correctly sets state when firstname is invalid', () => {
    const input = wrapper.find('input').at(0);
    input.value = 'tu';
    const mockedInputEvent = {
      target: {
        id: 'firstname',
        value: 'tu'
      }
    };
    input.simulate('keyup', mockedInputEvent);
    expect(wrapper.state().firstnameError).toEqual('name should be at least 3 letters');
    expect(wrapper.state().isFirstNameValid).toEqual(false);
  });
  it('correctly sets state when firstname is valid', () => {
    const input = wrapper.find('input').at(0);
    input.value = 'tumbii';
    const mockedInputEvent = {
      target: {
        id: 'firstname',
        value: 'tumbii'
      }
    };
    input.simulate('keyup', mockedInputEvent);
    expect(wrapper.state().firstnameError).toEqual('');
    expect(wrapper.state().isFirstNameValid).toEqual(true);
  });
  it('correctly sets state when lastname is invalid', () => {
    const input = wrapper.find('input').at(1);
    input.value = 'lastname';
    const mockedInputEvent = {
      target: {
        id: 'lastname',
        value: 'tu'
      }
    };
    input.simulate('keyup', mockedInputEvent);
    expect(wrapper.state().lastnameError).toEqual('name should be at least 3 letters');
    expect(wrapper.state().isLastNameValid).toEqual(false);
  });
  it('correctly sets state when lastname is valid', () => {
    const input = wrapper.find('input').at(1);
    input.value = 'lastname';
    const mockedInputEvent = {
      target: {
        id: 'lastname',
        value: 'tumbi'
      }
    };
    input.simulate('keyup', mockedInputEvent);
    expect(wrapper.state().lastnameError).toEqual('');
    expect(wrapper.state().isLastNameValid).toEqual(true);
  });
  it('correctly sets state when email is invalid', () => {
    const input = wrapper.find('input').at(2);
    input.value = 'email';
    const mockedInputEvent = {
      target: {
        id: 'email',
        value: 'tu'
      }
    };
    input.simulate('keyup', mockedInputEvent);
    expect(wrapper.state().emailError).toEqual('invalid email');
    expect(wrapper.state().isEmailValid).toEqual(false);
  });
  it('correctly sets state when email is valid', () => {
    const input = wrapper.find('input').at(2);
    input.value = 'email@gmail.com';
    const mockedInputEvent = {
      target: {
        id: 'email',
        value: 'email@gmail.com'
      }
    };
    input.simulate('keyup', mockedInputEvent);
    expect(wrapper.state().emailError).toEqual('');
    expect(wrapper.state().isEmailValid).toEqual(true);
  });
  it('correctly sets state when password is invalid', () => {
    const input = wrapper.find('input').at(3);
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
  it('correctly sets state when password is valid', () => {
    const input = wrapper.find('input').at(3);
    input.value = '123456wer';
    const mockedInputEvent = {
      target: {
        id: 'password',
        value: '123456wer'
      }
    };
    input.simulate('keyup', mockedInputEvent);
    expect(wrapper.state().passwordError).toEqual('');
    expect(wrapper.state().isPasswordValid).toEqual(true);
  });
});
