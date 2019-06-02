import React from 'react';
import { shallow } from 'enzyme';
import { MeetupPage } from '../../containers/MeetupPage/MeetupPage';

describe('MeetupPage', () => {
  it('Should correctly save snapshot of the MeetupPage', () => {
    const wrapper = shallow(<MeetupPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
