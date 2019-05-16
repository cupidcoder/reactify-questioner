import React from 'react';
import style from './ListItem.css';

const ListItem = ({ text }) => (
  <li className={style.ListItem}>
    {text}
  </li>
);

export default ListItem;
