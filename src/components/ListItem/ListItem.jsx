import React from 'react';
import { Link } from 'react-router-dom';
import style from './ListItem.css';

const ListItem = ({ text, path, clicked }) => (
  <li className={style.ListItem}>
    <Link to={path || '#'} onClick={clicked}>
      {text}
    </Link>
  </li>
);

export default ListItem;
