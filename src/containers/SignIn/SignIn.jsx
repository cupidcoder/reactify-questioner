import React from 'react';
import { SignInFormComponent } from '../../components/SignInForm/SignInForm';
import style from './SignIn.css';

const SignIn = () => (
  <div className={style.SignIn}>
    <SignInFormComponent />
  </div>
);

export default SignIn;
