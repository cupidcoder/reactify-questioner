import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button/Button';

describe('Button', () => {
  it('Should correctly save snapshot of button', () => {
    const ButtonWrapper = shallow(<Button />);
    expect(ButtonWrapper).toMatchSnapshot();
  });
});
