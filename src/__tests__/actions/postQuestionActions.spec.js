
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '../../config/axiosConfig';
import { POST_QUESTION_BEGIN, POST_QUESTION_SUCCESS, POST_QUESTION_FAILURE } from '../../actionTypes';

import {
  handlePostQuestionBegin,
  handlePostQuestionSuccess,
  handlePostQuestionFailure,
  postQuestionRequest
} from '../../actions/postQuestionActions';

const mock = new MockAdapter(axiosInstance);
const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('post question actions', () => {
  it('should return correct action for begin', () => {
    const action = handlePostQuestionBegin();
    expect(action).toEqual({
      type: POST_QUESTION_BEGIN
    });
  });
  it('should return correct action for success', () => {
    const payload = {};
    const action = handlePostQuestionSuccess(payload);
    expect(action).toEqual({
      type: POST_QUESTION_SUCCESS,
      payload
    });
  });
  it('should return correct action for failure', () => {
    const payload = {};
    const action = handlePostQuestionFailure(payload);
    expect(action).toEqual({
      type: POST_QUESTION_FAILURE,
      payload
    });
  });
});

describe('post question async action', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });
  it('creates POST_QUESTION_BEGIN after successfuly creating a question', () => {
    const meetupsMock = {
      status: 201,
      message: 'Success',
      data: [{
        id: 1,
        meetup_id: 2,
        body: 'Some question'
      }]
    };
    mock.onPost('/questions').reply(201, meetupsMock.data[0]);

    const expectedAction = [
      {
        type: POST_QUESTION_BEGIN
      },
      {
        type: POST_QUESTION_SUCCESS,
        payload: meetupsMock.data[0]
      }
    ];

    store.dispatch(postQuestionRequest()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
