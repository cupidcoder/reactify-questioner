import React from 'react';
import style from './MeetupDetailCard.css';

const MeetupDetailCard = ({
  name, description, location, date, attending
}) => (
  <div className={style.MeetupDetailCard}>
    <div className={style.EventDetail}>
      <h2>{name}</h2>
      <p>
        <i className='fas fa-calendar-alt' />
        {date}
      </p>
      <p>
        <i className='fas fa-map-marker-alt' />
        {location}
      </p>
      <p>
        <i className='fas fa-users' />
        {attending}
      </p>
    </div>
    <div className={style.Description}>
      <h3>{description}</h3>
    </div>
  </div>
);

export default MeetupDetailCard;
