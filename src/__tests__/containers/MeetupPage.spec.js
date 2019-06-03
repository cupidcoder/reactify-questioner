import React from 'react';
import { shallow } from 'enzyme';
import { MeetupPage } from '../../containers/MeetupPage/MeetupPage';

describe('MeetupPage', () => {
  it('Should correctly save snapshot of the MeetupPage', () => {
    const props = {
      computedMatch: {
        params: {
          meetupId: 2
        }
      }
    };
    const wrapper = shallow(<MeetupPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
