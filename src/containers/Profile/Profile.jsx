import React from 'react';
import BaseLayout from '../BaseContainer/BaseContainer';
import UserStatHeader from '../../components/UserStatHeader/UserStatHeader';
import UserStat from '../../components/UserStat/UserStat';
import UserStatFeed from '../../components/UserStatFeed/UserStatFeed';
import style from './Profile.css';

const Profile = () => {
  const UserDetails = {
    name: 'John Doe',
    joined: 'January 31st, 2019'
  };
  return (
    <BaseLayout>
      <div className={style.Profile}>
        <UserStatHeader {...UserDetails} />
        <UserStat />
        <UserStatFeed />
      </div>
    </BaseLayout>
  );
};
export default Profile;
