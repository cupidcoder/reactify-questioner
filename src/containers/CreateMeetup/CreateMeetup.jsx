import React from 'react';
import { MeetupFormComponent } from '../../components/MeetupForm/MeetupForm';
import style from './CreateMeetup.css';

const CreateMeetup = () => (
  <div className={style.CreateMeetup}>
    <MeetupFormComponent />
  </div>
);

export default CreateMeetup;
