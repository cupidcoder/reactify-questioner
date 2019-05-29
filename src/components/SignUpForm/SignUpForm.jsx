import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import FormErrorText from '../FormErrorText/FormErrorText';
import { processSignup } from '../../actions/authActions';
import style from './SignUpForm.css';
import Spinner from '../Spinner/Spinner';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      firstnameError: '',
      lastnameError: '',
      emailError: '',
      passwordError: '',
      isFirstNameValid: false,
      isLastNameValid: false,
      isEmailValid: false,
      isPasswordValid: false
    };
  }

  /**
   *
   * @param {object} token
   */
  loginUser = (token) => {
    const { history } = this.props;
    window.localStorage.setItem('token', token);
    history.push('/meetups');
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  checkInputName = (e) => {
    const validNameRegex = /^([a-zA-Z]){3}/;
    if (e.target.id === 'firstname') {
      if (!validNameRegex.test(e.target.value)) {
        this.setState({
          firstnameError: 'name should be at least 3 letters',
          isFirstNameValid: false
        });
      } else {
        this.setState({
          firstnameError: '',
          isFirstNameValid: true
        });
      }
    } else if (e.target.id === 'lastname') {
      if (!validNameRegex.test(e.target.value)) {
        this.setState({
          lastnameError: 'name should be at least 3 letters',
          isLastNameValid: false
        });
      } else {
        this.setState({
          lastnameError: '',
          isLastNameValid: true
        });
      }
    }
  }

  checkInputEmail = (e) => {
    const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!validEmailRegex.test(e.target.value)) {
      this.setState({
        emailError: 'invalid email',
        isEmailValid: false
      });
    } else {
      this.setState({
        emailError: '',
        isEmailValid: true
      });
    }
  }

  checkInputPassword = (e) => {
    const validPasswordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]){8}/;
    if (!validPasswordRegex.test(e.target.value)) {
      this.setState({
        passwordError: 'should be at least 8 characters',
        isPasswordValid: false
      });
    } else {
      this.setState({
        passwordError: '',
        isPasswordValid: true
      });
    }
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const {
      firstname, lastname, email, password
    } = this.state;
    const { signUpRequest } = this.props;
    await signUpRequest({
      firstname, lastname, email, password
    });
    const { status, message, data: { token } } = this.props;
    if (status === 201) {
      toast(`${message}. Redirecting...`, {
        type: 'success',
        onClose: () => this.loginUser(token)
      });
    } else if (status === 400) {
      toast(message, {
        type: 'error'
      });
    } else {
      toast('Something very strange happened.', {
        type: 'error'
      });
    }
  }

  render() {
    const { isLoading } = this.props;
    const {
      firstnameError, lastnameError, emailError, passwordError,
      isFirstNameValid, isLastNameValid, isEmailValid, isPasswordValid
    } = this.state;
    const spinner = isLoading ? <Spinner /> : null;
    const disabled = !(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) || isLoading;
    return (
      <div className={style.SignUpFormContainer}>
        <div className={style.SignUpForm}>
          <h2>Sign Up</h2>
          <form>
            <div className={style.Input}>
              <FormErrorText error={firstnameError} />
              <input
                type='text'
                id='firstname'
                placeholder='First name'
                onChange={this.handleInputChange}
                onKeyUp={this.checkInputName}
              />
            </div>
            <div className={style.Input}>
              <FormErrorText error={lastnameError} />
              <input
                type='text'
                id='lastname'
                placeholder='Last name'
                onChange={this.handleInputChange}
                onKeyUp={this.checkInputName}
              />
            </div>
            <div className={style.Input}>
              <FormErrorText error={emailError} />
              <input
                type='email'
                id='email'
                placeholder='Email'
                onChange={this.handleInputChange}
                onKeyUp={this.checkInputEmail}
              />
            </div>
            <div className={style.Input}>
              <FormErrorText error={passwordError} />
              <input
                type='password'
                id='password'
                placeholder='password'
                onChange={this.handleInputChange}
                onKeyUp={this.checkInputPassword}
              />
            </div>
            <div className={style.Button}>
              <Button
                onClick={this.handleFormSubmit}
                disabled={disabled}
              >
                Signup
                {' '}
                {spinner}
              </Button>
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

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  status: state.auth.status,
  message: state.auth.message,
  data: state.auth.data
});

const mapDispatchToProps = dispatch => ({
  signUpRequest: userObject => dispatch(processSignup(userObject))
});

const SignUpFormComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter((SignUpForm)));

export { SignUpForm, SignUpFormComponent };
