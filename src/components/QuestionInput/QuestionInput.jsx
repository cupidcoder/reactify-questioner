import React from 'react';
import style from './QuestionInput.css';
import Button from '../Button/Button';

const QuestionInput = () => (
  <div className={style.QuestionInput}>
    <div className={style.InputGroup}>
      <textarea className={style.Input} placeholder='Ask your question' />
      <Button>Post</Button>
    </div>
  </div>
);

export default QuestionInput;
