import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../components/NavBar/NavBar';

describe('NavBar', () => {
  it('Should correctly save snapshot of the NavBar', () => {
    const items = [
      { no: 1, text: 'Sign in', path: '/signin' },
      { no: 2, text: 'Sign up', path: '/signup' }
    ];
    const wrapper = shallow(<NavBar items={items} />);
    expect(wrapper).toMatchSnapshot();
  });
});
