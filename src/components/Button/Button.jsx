import React from 'react';
import style from './Button.css';

const Button = ({ onClick, disabled, children }) => (
  <button onClick={onClick} disabled={disabled} className={style.Button} type='button'>
    {children}
  </button>
);

export default Button;
