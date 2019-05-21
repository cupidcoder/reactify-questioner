import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import style from './SignUpForm.css';

class SignUpForm extends Component {
  render() {
    return (
      <div className={style.SignUpFormContainer}>
        <div className={style.SignUpForm}>
          <h2>Sign Up</h2>
          <form>
            <div className={style.Input}>
              <input type='text' id='firstname' placeholder='First name' />
            </div>
            <div className={style.Input}>
              <input type='text' id='lastname' placeholder='Last name' />
            </div>
            <div className={style.Input}>
              <input type='email' id='email' placeholder='Email' />
            </div>
            <div className={style.Input}>
              <input type='password' id='password' placeholder='password' />
            </div>
            <div className={style.Input}>
              <input type='password' id='confirm-password' placeholder='Confirm password' />
            </div>
            <div className={style.Button}>
              <Button>Sign up</Button>
            </div>
            <p className={style.FooterText}>
              Already have an account? Sign in
              {' '}
              <Link to='/signin'>here</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
