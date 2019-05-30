import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import FormErrorText from '../FormErrorText/FormErrorText';
import Spinner from '../Spinner/Spinner';
import { processSignin } from '../../actions/authActions';
import style from './SignInForm.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      isEmailValid: false,
      isPasswordValid: false
    };
  }

  handleFieldInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signInRequest } = this.props;
    await signInRequest({ email, password });
    const { status, message } = this.props;
    if (status === 200) {
      toast(`${message}. Redirecting...`, {
        type: 'success'
      });
    } else if (status === 403) {
      toast(message, {
        type: 'error'
      });
    }
  }

  checkEmailInput = (e) => {
    const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!validEmailRegex.test(e.target.value)) {
      this.setState({
        emailError: 'Email is invalid',
        isEmailValid: false,
      });
    } else {
      this.setState({
        emailError: '',
        isEmailValid: true,
      });
    }
  }

  checkPasswordInput = (e) => {
    const validPasswordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]){8}/;
    if (!validPasswordRegex.test(e.target.value)) {
      this.setState({
        passwordError: 'Should be alphanumeric and atleast 8 characters long',
        isPasswordValid: false,
      });
    } else {
      this.setState({
        passwordError: '',
        isPasswordValid: true,
      });
    }
  }

  render() {
    const {
      email, password, emailError, passwordError, isEmailValid, isPasswordValid
    } = this.state;
    const { isLoading } = this.props;
    const spinner = isLoading ? <Spinner /> : null;
    const disabled = !(isEmailValid && isPasswordValid) || isLoading;
    return (
      <div className={style.SignInFormContainer}>
        <div className={style.SignInForm}>
          <h2>Sign In</h2>
          <form>
            <div className={style.Input}>
              <FormErrorText error={emailError} />
              <input
                type='email'
                id='email'
                placeholder='Email address'
                onChange={this.handleFieldInput}
                onKeyUp={this.checkEmailInput}
                value={email}
              />
            </div>
            <div className={style.Input}>
              <FormErrorText error={passwordError} />
              <input
                type='password'
                id='password'
                placeholder='Password'
                onChange={this.handleFieldInput}
                onKeyUp={this.checkPasswordInput}
                value={password}
              />
            </div>
            <div className={style.Button}>
              <Button
                disabled={disabled}
                onClick={this.handleFormSubmit}
              >
                Sign in
                {' '}
                {spinner}
              </Button>
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

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  status: state.auth.status,
  message: state.auth.message,
  data: state.auth.data
});

const mapDispatchToProps = dispatch => ({
  signInRequest: loginObject => dispatch(processSignin(loginObject))
});

const SignInFormComponent = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

export { SignInForm, SignInFormComponent };
