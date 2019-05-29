import React from 'react';
import { shallow } from 'enzyme';
import BaseContainer from '../../containers/BaseContainer/BaseContainer';

describe('BaseContainer', () => {
  it('Should correctly save snapshot of the BaseContainer', () => {
    const wrapper = shallow(<BaseContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
