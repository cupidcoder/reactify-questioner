import {
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_BEGIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS
} from '../../actionTypes';

import { authReducer, initialState } from '../../reducers/authReducer';

describe('Auth reducer', () => {
  const payloadSuccess = {
    isLoading: false,
    status: 200,
    message: 'Successful',
    data: [{
      stub: '200'
    }]
  };
  const payloadFailure = {
    isLoading: false,
    status: 400,
    error: 'Failure'
  };
  it('should return initial state', () => {
    expect(authReducer(undefined, { type: '@@INIT' })).toEqual(
      initialState
    );
  });
  it('should return right state for begin', () => {
    expect(authReducer(initialState, {
      type: SIGNUP_BEGIN,
    })).toEqual({
      isLoading: true
    });
  });
  it('should return right state for success', () => {
    expect(authReducer(initialState, {
      type: SIGNUP_SUCCESS,
      payload: payloadSuccess
    })).toEqual({
      isLoading: false,
      status: 200,
      message: 'Successful',
      data: {
        stub: '200'
      }
    });
  });
  it('should return right state for failure', () => {
    expect(authReducer(initialState, {
      type: SIGNUP_FAILURE,
      payload: payloadFailure
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure',
      data: []
    });
  });
  it('should return right state for signin begin', () => {
    expect(authReducer(initialState, {
      type: SIGNIN_BEGIN,
    })).toEqual({
      isLoading: true
    });
  });
  it('should return right state for signin success', () => {
    expect(authReducer(initialState, {
      type: SIGNIN_SUCCESS,
      payload: payloadSuccess
    })).toEqual({
      isLoading: false,
      status: 200,
      message: 'Successful',
      data: {
        stub: '200'
      }
    });
  });
  it('should return right state for signin failure', () => {
    expect(authReducer(initialState, {
      type: SIGNIN_FAILURE,
      payload: payloadFailure
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure',
      data: []
    });
  });
});
