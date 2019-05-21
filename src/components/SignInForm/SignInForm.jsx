import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import style from './SignInForm.css';

class SignInForm extends Component {
  render() {
    return (
      <div className={style.SignInFormContainer}>
        <div className={style.SignInForm}>
          <h2>Sign In</h2>
          <form>
            <div className={style.Input}>
              <input type='email' id='email' placeholder='Email address' />
            </div>
            <div className={style.Input}>
              <input type='password' id='password' placeholder='Password' />
            </div>
            <div className={style.Button}>
              <Button>Sign in</Button>
            </div>
            <p className={style.FooterText}>
              Don&rsquo;t have an account? Sign up
              {' '}
              <Link to='/signup'>here</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInForm;
