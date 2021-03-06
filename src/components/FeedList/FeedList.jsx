import React from 'react';
import QuestionList from '../QuestionList/QuestionList';
import style from './FeedList.css';

const FeedList = () => {
  const meetups = [
    { no: 1, meetup: 'NodeJs' },
    { no: 2, meetup: 'Artificial Intelligence' }
  ];
  const questions = [
    { id: 1, body: 'test comment' },
    { id: 2, body: 'test comment' }
  ];
  return (
    <div className={style.FeedList}>
      {meetups.map(meetup => (
        <div key={meetup.no}>
          <h5>{meetup.meetup}</h5>
          <QuestionList questions={questions} />
        </div>
      ))}
    </div>
  );
};

export default FeedList;
