import React from 'react';
import style from './Button.css';

const Button = ({
  onClick, disabled, children, type
}) => (
  <button onClick={onClick} disabled={disabled} className={style.Button} type='submit'>
    {children}
  </button>
);

export default Button;
