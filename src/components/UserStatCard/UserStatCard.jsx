import React from 'react';
import style from './UserStatCard.css';

const UserStatCard = ({ stat, text }) => (
  <div className={style.UserStatCard}>
    <div className={style.UserStatContent}>
      <h3>{stat}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default UserStatCard;
