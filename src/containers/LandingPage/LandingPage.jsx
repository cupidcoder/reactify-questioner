import React from 'react';
import Button from '../../components/Button/Button';
import style from './LandingPage.css';

const LandingPage = () => (
  <section className={style.LandingPage}>
    <div className={style.HeroText}>
      <h1>Don&rsquo;t leave your attendees guessing</h1>
      <div className={style.Button}>
        <Button>
          Sign in
        </Button>
      </div>
    </div>
  </section>
);

export default LandingPage;
