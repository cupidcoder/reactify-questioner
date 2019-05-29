import React from 'react';
import { shallow } from 'enzyme';
import Meetups from '../../containers/Meetups/Meetups';

describe('Meetups', () => {
  it('Should correctly save snapshot of the Meetups page', () => {
    const wrapper = shallow(<Meetups />);
    expect(wrapper).toMatchSnapshot();
  });
});
