import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import style from './Header.css';

const Header = () => {
  const items = [
    { no: 1, text: 'Sign in', path: '/signin' },
    { no: 2, text: 'Sign up', path: '/signup' }
  ];
  return (
    <header>
      <div className={style.Header}>
        <div className={style.Logo}>
          <h1>
            <Link to='/'>
              Questioner
            </Link>
          </h1>
        </div>
        <div className={style.Nav}>
          <NavBar items={items} />
        </div>
      </div>
    </header>
  );
};

export default Header;
