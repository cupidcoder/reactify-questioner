import React from 'react';
import style from './BaseContainer.css';

const BaseContainer = ({ children }) => (
  <div className={style.BaseContainer}>
    {children}
  </div>
);

export default BaseContainer;
