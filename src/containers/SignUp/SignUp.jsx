import React from 'react';
import { SignUpFormComponent } from '../../components/SignUpForm/SignUpForm';
import style from './SignUp.css';

const SignUp = () => (
  <div className={style.SignUp}>
    <SignUpFormComponent />
  </div>
);

export default SignUp;
