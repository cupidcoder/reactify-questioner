import React from 'react';
import { shallow } from 'enzyme';
import QuestionCard from '../../components/QuestionCard/QuestionCard';

describe('QuestionCard', () => {
  it('Should correctly save snapshot of the QuestionCard', () => {
    const wrapper = shallow(<QuestionCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
