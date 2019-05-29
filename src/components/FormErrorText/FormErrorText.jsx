import React from 'react';
import style from './FormErrorText.css';

const FormErrorText = ({ error }) => (
  <p className={style.FormErrorText}>{error}</p>
);

export default FormErrorText;
