import React from 'react';
import MeetupForm from '../../components/MeetupForm/MeetupForm';
import style from './CreateMeetup.css';

const CreateMeetup = () => (
  <div className={style.CreateMeetup}>
    <MeetupForm />
  </div>
);

export default CreateMeetup;
