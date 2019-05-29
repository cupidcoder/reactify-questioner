import React from 'react';
import { shallow } from 'enzyme';
import RsvpButtons from '../../components/RsvpButtons/RsvpButtons';

describe('RsvpButtons', () => {
  it('Should correctly save snapshot of the RsvpButtons', () => {
    const wrapper = shallow(<RsvpButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
