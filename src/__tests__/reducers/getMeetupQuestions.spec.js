import { getMeetupQuestionsReducer, initialState } from '../../reducers/getQuestionsReducer';
import { GET_QUESTIONS_BEGIN, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE } from '../../actionTypes';

describe('get meetup questions reducer', () => {
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
    expect(getMeetupQuestionsReducer(undefined, { type: '@@INIT' })).toEqual(
      initialState
    );
  });
  it('should return right state for begin', () => {
    expect(getMeetupQuestionsReducer(initialState, {
      type: GET_QUESTIONS_BEGIN,
    })).toEqual({
      isLoading: true
    });
  });
  it('should return right state for success', () => {
    expect(getMeetupQuestionsReducer(initialState, {
      type: GET_QUESTIONS_SUCCESS,
      payload: payloadSuccess
    })).toEqual({
      isLoading: false,
      status: 200,
      message: 'Successful',
      data: [{
        stub: '200'
      }]
    });
  });

  it('should return right state for failure', () => {
    expect(getMeetupQuestionsReducer(initialState, {
      type: GET_QUESTIONS_FAILURE,
      payload: payloadFailure
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure',
      data: []
    });
  });
});
