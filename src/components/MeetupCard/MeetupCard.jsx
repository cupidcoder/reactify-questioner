import React from 'react';
import { Link } from 'react-router-dom';
import style from './MeetupCard.css';

const MeetupCard = ({
  id, name, description, location
}) => (
  <Link to={`meetups/page/${id}`} className={style.Link}>
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
  </Link>
);

export default MeetupCard;
