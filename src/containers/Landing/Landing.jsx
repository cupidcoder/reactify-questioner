import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import style from './Landing.css';

const LandingPage = () => (
  <section className={style.LandingPage}>
    <div className={style.HeroText}>
      <h1>Don&rsquo;t leave your attendees guessing</h1>
      <div className={style.Button}>
        <Button>
          <Link to='/signup'>
            Sign up
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default LandingPage;
