import React from 'react';
import style from './MeetupCard.css';

const MeetupCard = ({ name, description, location }) => (
  <div className={style.MeetupCard}>
    <div className={style.MeetupCardContent}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        <i className='fas fa-map-marker-alt' />
        {location}
      </p>
    </div>
  </div>
);

export default MeetupCard;
