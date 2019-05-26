import React from 'react';
import UserStatCard from '../UserStatCard/UserStatCard';
import style from './UserStat.css';

const UserStat = () => {
  const stats = [
    { no: 1, stat: 39, text: 'Questions' },
    { no: 2, stat: 14, text: 'Comments' }
  ];
  return (
    <div className={style.UserStat}>
      {stats.map(stat => <UserStatCard key={stat.no} stat={stat.stat} text={stat.text} />)}
    </div>
  );
};
export default UserStat;
