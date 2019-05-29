import React from 'react';
import { shallow } from 'enzyme';
import MeetupCard from '../../components/MeetupCard/MeetupCard';

describe('MeetupCard', () => {
  it('Should correctly save snapshot of the MeetupCard', () => {
    const wrapper = shallow(<MeetupCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
