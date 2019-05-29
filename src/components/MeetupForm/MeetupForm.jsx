import React, { Component } from 'react';
import Button from '../Button/Button';
import style from './MeetupForm.css';

class MeetupForm extends Component {
  render() {
    const { increase } = this.props;
    return (
      <div className={style.MeetupFormContainer}>
        <div className={style.MeetupForm}>
          <h2>Create Meetup</h2>
          <form>
            <div className={style.Input}>
              <input type='text' id='topic' placeholder='Topic' />
            </div>
            <div className={style.Input}>
              <input type='text' id='description' placeholder='Description' />
            </div>
            <div className={style.Input}>
              <input type='text' id='location' placeholder='Location' />
            </div>
            <div className={style.Input}>
              <input type='text' id='date' placeholder='Date' />
            </div>
            <div className={style.Button}>
              <Button>Create</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MeetupForm;
