import React from 'react';
import { shallow } from 'enzyme';
import FormErrorText from '../../components/FormErrorText/FormErrorText';

describe('FormErrorText', () => {
  it('Should correctly save snapshot of the FormErrorText', () => {
    const FormErrorTextWrapper = shallow(<FormErrorText />);
    expect(FormErrorTextWrapper).toMatchSnapshot();
  });
});
