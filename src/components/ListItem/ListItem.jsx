import React from 'react';
import { Link } from 'react-router-dom';
import style from './ListItem.css';

const ListItem = ({ text, path }) => (
  <li className={style.ListItem}>
    <Link to={path}>
      {text}
    </Link>
  </li>
);

export default ListItem;
