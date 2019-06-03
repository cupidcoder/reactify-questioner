import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import style from './QuestionList.css';

const QuestionList = ({ questions }) => {
  let questionsList;
  const questionsCount = questions.length;
  if (questionsCount > 0) {
    questionsList = questions.map(question => (
      <QuestionCard key={question.id} question={question.body} commentCount='0' />
    ));
  } else {
    questionsList = <h3>No questions at the moment</h3>;
  }
  return (
    <div className={style.QuestionList}>
      <h3>
        Questions (
        {questionsCount}
        )
      </h3>
      {questionsList}
    </div>
  );
};
export default QuestionList;
