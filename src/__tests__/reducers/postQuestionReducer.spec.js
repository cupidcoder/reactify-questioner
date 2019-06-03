import { postQuestionReducer, initialState } from '../../reducers/postQuestionReducer';
import { POST_QUESTION_BEGIN, POST_QUESTION_SUCCESS, POST_QUESTION_FAILURE } from '../../actionTypes';

describe('post question reducer', () => {
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
    expect(postQuestionReducer(undefined, { type: '@@INIT' })).toEqual(
      initialState
    );
  });
  it('should return right state for begin', () => {
    expect(postQuestionReducer(initialState, {
      type: POST_QUESTION_BEGIN,
    })).toEqual({
      isLoading: true
    });
  });
  it('should return right state for success', () => {
    expect(postQuestionReducer(initialState, {
      type: POST_QUESTION_SUCCESS,
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
    expect(postQuestionReducer(initialState, {
      type: POST_QUESTION_FAILURE,
      payload: payloadFailure
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure',
      data: []
    });
  });
});
