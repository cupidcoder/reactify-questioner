import React from 'react';
import NavBar from '../NavBar/NavBar';
import style from './Header.css';

const Header = () => {
  const items = [
    { no: 1, text: 'Sign in' },
    { no: 2, text: 'Sign up' }
  ];
  return (
    <header>
      <div className={style.Header}>
        <div className={style.Logo}>
          <h1>Questioner</h1>
        </div>
        <div className={style.Nav}>
          <NavBar items={items} />
        </div>
      </div>
    </header>
  );
};

export default Header;
