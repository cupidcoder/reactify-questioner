import React from 'react';
import style from './Button.css';

const Button = ({ children }) => (
  <button className={style.Button} type='button'>
    {children}
  </button>
);

export default Button;
