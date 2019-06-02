import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../config/axiosConfig';
import { GET_MEETUP_DETAILS_BEGIN, GET_MEETUP_DETAILS_SUCCESS, GET_MEETUP_DETAILS_FAILURE } from '../../actionTypes';

import {
  handleGetMeetupDetailsBegin,
  handleGetMeetupDetailsSuccess,
  handleGetMeetupDetailsFailure,
  getMeetupDetailsRequest
} from '../../actions/getMeetupDetailsActions';

const mock = new MockAdapter(axiosInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('get meetup details actions', () => {
  it('should return correct action for begin', () => {
    const action = handleGetMeetupDetailsBegin();
    expect(action).toEqual({
      type: GET_MEETUP_DETAILS_BEGIN
    });
  });
  it('should return correct action for success', () => {
    const payload = {};
    const action = handleGetMeetupDetailsSuccess(payload);
    expect(action).toEqual({
      type: GET_MEETUP_DETAILS_SUCCESS,
      payload
    });
  });
  it('should return correct action for failure', () => {
    const payload = {};
    const action = handleGetMeetupDetailsFailure(payload);
    expect(action).toEqual({
      type: GET_MEETUP_DETAILS_FAILURE,
      payload
    });
  });
  it('should dispatch a successful get meetup details action', () => {
    const mockMeetupId = 3;
    const meetupDetailsMockData = {
      status: 200,
      message: 'success',
      data: [{
        id: 3,
        created_on: '2019-05-26T19:41:00.000Z',
        location: 'Maryland Mall',
        topic: 'Movie Critics',
        description: 'Movie critics meetup description',
        happening_on: '2019-05-03T17:30:00.000Z',
        tags: null,
        images: null
      }],
    };
    mock.onGet(`/meetups/${mockMeetupId}`).reply(200, meetupDetailsMockData.data[0]);

    const expectedAction = [
      {
        type: GET_MEETUP_DETAILS_BEGIN
      },
      {
        type: GET_MEETUP_DETAILS_SUCCESS,
        payload: meetupDetailsMockData.data[0]
      }
    ];

    store.dispatch(getMeetupDetailsRequest(mockMeetupId)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
