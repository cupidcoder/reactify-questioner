import React from 'react';
import spinner from '../../assets/gifs';
import style from './Spinner.css';

const Spinner = () => (
  <img className={style.Spinner} src={spinner} alt='spinner' />
);

export default Spinner;
