import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../config/axiosConfig';
import { GET_MEETUPS_BEGIN, GET_MEETUPS_SUCCESS, GET_MEETUPS_FAILURE } from '../../actionTypes';

import {
  handleGetMeetupBegin,
  handleGetMeetupSuccess,
  handleGetMeetupFailure,
  processGetMeetups
} from '../../actions/getMeetupActions';

const mock = new MockAdapter(axiosInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('get meetup actions', () => {
  it('should return correct action for begin', () => {
    const action = handleGetMeetupBegin();
    expect(action).toEqual({
      type: GET_MEETUPS_BEGIN
    });
  });
  it('should return correct action for success', () => {
    const payload = {};
    const action = handleGetMeetupSuccess(payload);
    expect(action).toEqual({
      type: GET_MEETUPS_SUCCESS,
      payload
    });
  });
  it('should return correct action for failure', () => {
    const payload = {};
    const action = handleGetMeetupFailure(payload);
    expect(action).toEqual({
      type: GET_MEETUPS_FAILURE,
      payload
    });
  });
});

describe('get meetups async action', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });
  it('creates GET_MEETUPS_BEGIN after successfuly fetching meetups', () => {
    const meetupsMock = {
      status: 200,
      message: 'Success',
      data: [{
        id: 1,
        topic: 'Some meetup'
      }]
    };
    mock.onGet('/meetups').reply(200, meetupsMock.data[0]);

    const expectedAction = [
      {
        type: GET_MEETUPS_BEGIN
      },
      {
        type: GET_MEETUPS_SUCCESS,
        payload: meetupsMock.data[0]
      }
    ];

    store.dispatch(processGetMeetups()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
