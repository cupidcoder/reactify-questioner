import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import style from './QuestionList.css';

const QuestionList = () => {
  const questions = [
    {
      no: 1,
      question: `tor, massa ligula sodales leo, id interdummassa orci
      quis nisl. Cras convallis mattis tellus ut tempor. Pellentesque pulvinars
      nibh vitae mi auctor pellentesque`,
      commentCount: 8
    },
    {
      no: 2,
      question: `tor, massa ligula sodales leo, id interdummassa orci
      quis nisl. Cras convallis mattis tellus ut tempor. Pellentesque pulvinar
      nibh vitae mi auctor pellentesque`,
      commentCount: 16
    },
    {
      no: 3,
      question: `tor, massa ligula sodales leo, id interdummassa orci
      quis nisl. Cras convallis mattis tellus ut tempor. Pellentesque pulvinar
      nibh vitae mi auctor pellentesque`,
      commentCount: 19
    },
    {
      no: 4,
      question: `tor, massa ligula sodales leo, id interdummassa orci
      quis nisl. Cras convallis mattis tellus ut tempor. Pellentesque pulvinar
      nibh vitae mi auctor pellentesque`,
      commentCount: 46
    },
  ];
  return (
    <div className={style.QuestionList}>
      <h3>Questions (4)</h3>
      {questions.map(question => (
        <QuestionCard key={question.no} question={question.question} commentCount={question.commentCount} />
      ))}
    </div>
  );
};
export default QuestionList;
