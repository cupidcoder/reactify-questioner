import React from 'react';
import { shallow } from 'enzyme';
import CreateMeetup from '../../containers/CreateMeetup/CreateMeetup';

describe('CreateMeetup', () => {
  it('Should correctly save snapshot of the CreateMeetup', () => {
    const wrapper = shallow(<CreateMeetup />);
    expect(wrapper).toMatchSnapshot();
  });
});
