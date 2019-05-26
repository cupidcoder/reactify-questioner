import React from 'react';
import style from './QuestionCard.css';

const QuestionCard = ({ question, commentCount }) => (
  <div className={style.QuestionCard}>
    <div className={style.QuestionContent}>
      <p>{question}</p>
      <div className={style.IconGroup}>
        <p>
          <i className='fas fa-arrow-up' />
          {' '}
          upvote
        </p>
        <p>
          <i className='fas fa-arrow-down' />
          {' '}
          downvote
        </p>
        <p>
          <i className='far fa-comments' />
          {' '}
          {commentCount}
        </p>
      </div>
    </div>
  </div>
);

export default QuestionCard;
