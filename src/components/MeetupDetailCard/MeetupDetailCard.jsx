import React from 'react';
import moment from 'moment';
import Skeleton from 'react-skeleton-loader';
import style from './MeetupDetailCard.css';

const MeetupDetailCard = ({
  topic, description, location, happening_on: happeningOn, attending
}) => {
  const date = moment(happeningOn).format('dddd, MMMM Do YYYY');
  const time = moment(happeningOn).format('h:mm a');
  return (
    <div className={style.MeetupDetailCard}>
      <div className={style.EventDetail}>
        <h2>{topic || <Skeleton />}</h2>
        <p>
          <i className='fas fa-calendar-alt' />
          {date || <Skeleton />}
        </p>
        <p>
          <i className='fas fa-map-marker-alt' />
          {location || <Skeleton />}
        </p>
        <p>
          <i className='fas fa-clock' />
          {time || <Skeleton />}
        </p>
      </div>
      <div className={style.Description}>
        <h3>{description || <Skeleton />}</h3>
      </div>
    </div>
  );
};

export default MeetupDetailCard;
