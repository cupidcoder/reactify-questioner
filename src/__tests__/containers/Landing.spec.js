import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../../containers/Landing/Landing';

describe('Landing', () => {
  it('Should correctly save snapshot of the Landing', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
  });
});
