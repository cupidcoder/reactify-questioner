import {
  SIGNIN_BEGIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../../actionTypes';

import {
  handleSigninBegin,
  handleSigninSuccess,
  handleSigninFailure,
  handleSignupBegin,
  handleSignupSuccess,
  handleSignupFailure
} from '../../actions/authActions';

describe('Auth actions', () => {
  it('should return correct state for signin begin', () => {
    const action = handleSigninBegin();
    expect(action).toEqual({
      type: SIGNIN_BEGIN
    });
  });
  it('should return correct state for signin success', () => {
    const payload = {};
    const action = handleSigninSuccess(payload);
    expect(action).toEqual({
      type: SIGNIN_SUCCESS,
      payload
    });
  });
  it('should return correct state for signin failure', () => {
    const payload = {};
    const action = handleSigninFailure(payload);
    expect(action).toEqual({
      type: SIGNIN_FAILURE,
      payload
    });
  });
  it('should return correct state for signup begin', () => {
    const action = handleSignupBegin();
    expect(action).toEqual({
      type: SIGNUP_BEGIN
    });
  });
  it('should return correct state for signup success', () => {
    const payload = {};
    const action = handleSignupSuccess(payload);
    expect(action).toEqual({
      type: SIGNUP_SUCCESS,
      payload
    });
  });
  it('should return correct state for signup failure', () => {
    const payload = {};
    const action = handleSignupFailure(payload);
    expect(action).toEqual({
      type: SIGNUP_FAILURE,
      payload
    });
  });
});
