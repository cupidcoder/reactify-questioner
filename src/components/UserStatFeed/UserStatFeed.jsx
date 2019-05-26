import React from 'react';
import FeedList from '../FeedList/FeedList';
import style from './UserStatFeed.css';

const UserStatFeed = () => (
  <div className={style.UserStatFeed}>
    <h4>Questions feed</h4>
    <FeedList />
  </div>
);

export default UserStatFeed;
