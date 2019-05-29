import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header/Header';

describe('Header', () => {
  it('Should correctly save snapshot of the Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
