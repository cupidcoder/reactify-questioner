import {
  SIGNUP_BEGIN,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNIN_BEGIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS
} from '../actionTypes';
import axios from '../config/axiosConfig';

/**
 * Sets the loading state
 */
export const handleSignupBegin = () => ({
  type: SIGNUP_BEGIN
});

/**
 * Sets the loading state
 */
export const handleSigninBegin = () => ({
  type: SIGNIN_BEGIN
});

/**
 * dispatches successful signup
 * @param {object} payload response from the api
 */
export const handleSignupSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload
});

/**
 * dispatches successful signin
 * @param {object} payload response from the api
 */
export const handleSigninSuccess = payload => ({
  type: SIGNIN_SUCCESS,
  payload
});

/**
 * dispatches failure signup
 * @param {object} payload response from the api
 */
export const handleSignupFailure = payload => ({
  type: SIGNUP_FAILURE,
  payload
});

/**
 * dispatches failure signin
 * @param {object} payload response from the api
 */
export const handleSigninFailure = payload => ({
  type: SIGNIN_FAILURE,
  payload
});

/**
 * Makes call to signup endpoint
 * @param {object} userObject user information
 */
export const processSignup = userObject => async (dispatch) => {
  dispatch(handleSignupBegin());
  try {
    const response = await axios.post('/auth/signup', userObject);
    return dispatch(handleSignupSuccess(response.data));
  } catch (error) {
    return dispatch(handleSignupFailure(error.response.data));
  }
};

/**
 * Makes call to signin endpoint
 * @param {object} loginObject user information
 */
export const processSignin = loginObject => async (dispatch) => {
  dispatch(handleSigninBegin());
  try {
    const response = await axios.post('/auth/login', loginObject);
    return dispatch(handleSigninSuccess(response.data));
  } catch (error) {
    return dispatch(handleSigninFailure(error.response.data));
  }
};
