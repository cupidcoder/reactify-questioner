import React from 'react';
import { shallow } from 'enzyme';
import QuestionInput from '../../components/QuestionInput/QuestionInput';

describe('QuestionInput', () => {
  it('Should correctly save snapshot of the QuestionInput', () => {
    const wrapper = shallow(<QuestionInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
