import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../config/axiosConfig';
import { GET_QUESTIONS_BEGIN, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE } from '../../actionTypes';

import {
  handleGetQuestionsBegin,
  handleGetQuestionsSuccess,
  handleGetQuestionsFailure,
  getMeetupQuestionsRequest
} from '../../actions/getMeetupQuestionsActions';

const mock = new MockAdapter(axiosInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('get meetup details actions', () => {
  it('should return correct action for begin', () => {
    const action = handleGetQuestionsBegin();
    expect(action).toEqual({
      type: GET_QUESTIONS_BEGIN
    });
  });
  it('should return correct action for success', () => {
    const payload = {};
    const action = handleGetQuestionsSuccess(payload);
    expect(action).toEqual({
      type: GET_QUESTIONS_SUCCESS,
      payload
    });
  });
  it('should return correct action for failure', () => {
    const payload = {};
    const action = handleGetQuestionsFailure(payload);
    expect(action).toEqual({
      type: GET_QUESTIONS_FAILURE,
      payload
    });
  });
  it('should dispatch a successful get meetup questions action', () => {
    const mockMeetupId = 3;
    const meetupQuestionsMockData = {
      status: 200,
      message: 'success',
      data: [
        {
          id: 3,
          user_id: 1,
          meetup_id: 3,
          body: 'Sample comment'
        },
        {
          id: 3,
          user_id: 1,
          meetup_id: 3,
          body: 'Sample comment'
        }
      ],
    };
    mock.onGet(`/meetups/${mockMeetupId}/questions`).reply(200, meetupQuestionsMockData.data[0]);

    const expectedAction = [
      {
        type: GET_QUESTIONS_BEGIN
      },
      {
        type: GET_QUESTIONS_SUCCESS,
        payload: meetupQuestionsMockData.data[0]
      }
    ];

    store.dispatch(getMeetupQuestionsRequest(mockMeetupId)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
