import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner/Spinner';

describe('Spinner', () => {
  it('Should correctly save snapshot of the Spinner', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
});
