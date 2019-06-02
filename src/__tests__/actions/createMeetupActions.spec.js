import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../config/axiosConfig';
import { CREATE_MEETUP_BEGIN, CREATE_MEETUP_SUCCESS, CREATE_MEETUP_FAILURE } from '../../actionTypes';

import {
  handleCreateMeetupBegin,
  handleCreateMeetupSuccess,
  handleCreateMeetupFailure,
  processCreateMeetup
} from '../../actions/createMeetupActions';

const mock = new MockAdapter(axiosInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('Create meetup actions', () => {
  it('should return correct action for begin', () => {
    const action = handleCreateMeetupBegin();
    expect(action).toEqual({
      type: CREATE_MEETUP_BEGIN
    });
  });
  it('should return correct action for success', () => {
    const payload = {};
    const action = handleCreateMeetupSuccess(payload);
    expect(action).toEqual({
      type: CREATE_MEETUP_SUCCESS,
      payload
    });
  });
  it('should return correct action for failure', () => {
    const payload = {};
    const action = handleCreateMeetupFailure(payload);
    expect(action).toEqual({
      type: CREATE_MEETUP_FAILURE,
      payload
    });
  });
});

describe('create meetup async action', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });
  it('creates CREATE_MEETUP_BEGIN after successfuly creating a meetup', () => {
    const meetupsMock = {
      status: 201,
      message: 'Success',
      data: [{
        id: 1,
        topic: 'Some meetup'
      }]
    };
    mock.onPost('/meetups').reply(201, meetupsMock.data[0]);

    const expectedAction = [
      {
        type: CREATE_MEETUP_BEGIN
      },
      {
        type: CREATE_MEETUP_SUCCESS,
        payload: meetupsMock.data[0]
      }
    ];

    store.dispatch(processCreateMeetup()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
