import React from 'react';
import { shallow } from 'enzyme';
import MeetupForm from '../../components/MeetupForm/MeetupForm';

describe('MeetupForm', () => {
  it('Should correctly save snapshot of the MeetupForm', () => {
    const wrapper = shallow(<MeetupForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
