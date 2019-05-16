import React from 'react';
import ListItem from '../ListItem/ListItem';

const NavBar = ({ items }) => (
  <ul>
    {items.map(item => <ListItem key={item.no} text={item.text} />)}
  </ul>
);

export default NavBar;
