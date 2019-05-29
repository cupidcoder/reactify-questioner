import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import style from './Header.css';

const Header = ({ token }) => {
  let items = [
    { no: 1, text: 'Sign in', path: '/signin' },
    { no: 2, text: 'Sign up', path: '/signup' }
  ];
  const isLoggedIn = () => {
    if (token) {
      items = [
        { no: 1, text: 'Profile', path: '#' },
        { no: 2, text: 'Logout', path: '#' }
      ];
    }
  };
  isLoggedIn();
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

const mapStateToProps = (state) => {
  if (state.auth.data) {
    return { token: state.auth.data.token };
  }
  return { token: undefined };
};

const HeaderComponent = connect(mapStateToProps)(Header);

export { Header, HeaderComponent };
