import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/Footer';

describe('Footer', () => {
  it('Should correctly save snapshot of the footer', () => {
    const FooterWrapper = shallow(<Footer />);
    expect(FooterWrapper).toMatchSnapshot();
  });
});
