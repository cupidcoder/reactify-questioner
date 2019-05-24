import React from 'react';
import BaseLayout from '../BaseContainer/BaseContainer';
import MeetupDetailCard from '../../components/MeetupDetailCard/MeetupDetailCard';
import RsvpButtons from '../../components/RsvpButtons/RsvpButtons';
import style from './MeetupPage.css';

const MeetupPage = () => {
  const meetupDetail = {
    name: 'The Power of X',
    location: 'Gbagada',
    date: '31st of May, 2019',
    description: `To unpack what this means, how to hop on the remote train,
    and be successful at it, Andela is putting together this evening event with
    Nigeria's Tech Leaders, Andelans, and Tech Expert from an amazing company who we're stoked to work with!.`,
    attending: 189
  };
  return (
    <BaseLayout>
      <div className={style.MeetupPage}>
        <MeetupDetailCard {...meetupDetail} />
        <RsvpButtons />
      </div>
    </BaseLayout>
  );
};

export default MeetupPage;
