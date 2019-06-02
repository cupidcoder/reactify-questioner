import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../config/axiosConfig';
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
  handleSignupFailure,
  processSignin,
  processSignup
} from '../../actions/authActions';

const mock = new MockAdapter(axiosInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

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

describe('auth async action', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });
  it('creates SIGNUP_BEGIN after successfuly signing up', () => {
    const meetupsMock = {
      status: 201,
      message: 'Success',
      data: [{
        id: 1,
        firstname: 'John',
        lastname: 'Doe'
      }]
    };
    mock.onPost('/auth/signup').reply(201, meetupsMock.data[0]);

    const expectedAction = [
      {
        type: SIGNUP_BEGIN
      },
      {
        type: SIGNUP_SUCCESS,
        payload: meetupsMock.data[0]
      }
    ];

    store.dispatch(processSignup()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('creates SIGNIN_BEGIN after successfuly signing up', () => {
    const meetupsMock = {
      status: 201,
      message: 'Success',
      data: [{
        id: 1,
        firstname: 'John',
        lastname: 'Doe'
      }]
    };
    mock.onPost('/auth/login').reply(200, meetupsMock.data[0]);

    const expectedAction = [
      {
        type: SIGNIN_BEGIN
      },
      {
        type: SIGNIN_SUCCESS,
        payload: meetupsMock.data[0]
      }
    ];

    store.dispatch(processSignin()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
