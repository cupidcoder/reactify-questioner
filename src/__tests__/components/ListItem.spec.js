import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../components/ListItem/ListItem';

describe('ListItem', () => {
  it('Should correctly save snapshot of the ListItem', () => {
    const items = {
      text: 'test',
      path: '/somewhere'
    };
    const wrapper = shallow(<ListItem {...items} />);
    expect(wrapper).toMatchSnapshot();
  });
});
