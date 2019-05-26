import React from 'react';
import style from './Button.css';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className={style.Button} type='button'>
    {children}
  </button>
);

export default Button;
