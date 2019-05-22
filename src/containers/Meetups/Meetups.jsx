import React from 'react';
import BaseContainer from '../BaseContainer/BaseContainer';
import MeetupCard from '../../components/MeetupCard/MeetupCard';
import style from './Meetups.css';

const Meetups = () => {
  const meetups = [
    {
      no: 1, name: 'NodeJs', description: 'Pushing code forward', location: 'Ikeja, Lagos'
    },
    {
      no: 2, name: 'NodeJs', description: 'Pushing code forward', location: 'Ikeja, Lagos'
    },
    {
      no: 3, name: 'NodeJs', description: 'Pushing code forward', location: 'Ikeja, Lagos'
    },
    {
      no: 4, name: 'NodeJs', description: 'Pushing code forward', location: 'Ikeja, Lagos'
    },
    {
      no: 5, name: 'NodeJs', description: 'Pushing code forward', location: 'Ikeja, Lagos'
    },
    {
      no: 6, name: 'NodeJs', description: 'Pushing code forward', location: 'Ikeja, Lagos'
    },
    {
      no: 7, name: 'NodeJs', description: 'Pushing code forward', location: 'Ikeja, Lagos'
    },
    {
      no: 8, name: 'NodeJs', description: 'Pushing code forward', location: 'Ikeja, Lagos'
    },
    {
      no: 9, name: 'NodeJs', description: 'Pushing code forward', location: 'Ikeja, Lagos'
    }
  ];
  return (
    <BaseContainer>
      <div className={style.Meetups}>
        {meetups.map(meetup => (
          <MeetupCard
            key={meetup.no}
            name={meetup.name}
            description={meetup.description}
            location={meetup.location}
          />
        ))}
      </div>
    </BaseContainer>
  );
};

export default Meetups;
