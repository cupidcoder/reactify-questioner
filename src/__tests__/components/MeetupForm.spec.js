import React from 'react';
import { shallow } from 'enzyme';
import { MeetupForm } from '../../components/MeetupForm/MeetupForm';

describe('MeetupForm', () => {
  const wrapper = shallow(<MeetupForm />);
  it('Should correctly save snapshot of the MeetupForm', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly sets state for topic input', () => {
    const input = wrapper.find('input').at(0);
    input.value = 'Nodejs';
    const mockedInputEvent = {
      target: {
        id: 'topic',
        value: 'Nodejs'
      }
    };
    input.simulate('change', mockedInputEvent);
    expect(wrapper.state().topic).toEqual('Nodejs');
  });
});
