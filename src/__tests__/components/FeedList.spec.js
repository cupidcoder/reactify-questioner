import React from 'react';
import { mount } from 'enzyme';
import FeedList from '../../components/FeedList/FeedList';

describe('Feed List', () => {
  it('Should correctly save snapshot of the FeedList component', () => {
    const FeedListWrapper = mount(<FeedList />);
    expect(FeedListWrapper).toMatchSnapshot();
  });
});
