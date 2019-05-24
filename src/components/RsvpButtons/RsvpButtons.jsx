import React from 'react';
import Button from '../Button/Button';
import style from './RsvpButtons.css';

const RsvpButtons = () => (
  <div className={style.RsvpButtons}>
    <div className={style.RsvpText}>
      <h3>Are you going?</h3>
    </div>
    <div className={style.RsvpResponse}>
      <Button>Yes</Button>
      <Button>No</Button>
      <Button>Maybe</Button>
    </div>
  </div>
);

export default RsvpButtons;
