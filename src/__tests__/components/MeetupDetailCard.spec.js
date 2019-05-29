import React from 'react';
import { shallow } from 'enzyme';
import MeetupDetailCard from '../../components/MeetupDetailCard/MeetupDetailCard';

describe('MeetupDetailCard', () => {
  it('Should correctly save snapshot of the MeetupDetailCard', () => {
    const wrapper = shallow(<MeetupDetailCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
