import React from 'react';
import style from './UserStatHeader.css';

const UserStatHeader = ({ name, joined }) => (
  <div className={style.UserStatHeader}>
    <h3>{name}</h3>
    <h3>
      <span className={style.Joined}>Joined:</span>
      {' '}
      {joined}
    </h3>
  </div>
);

export default UserStatHeader;
