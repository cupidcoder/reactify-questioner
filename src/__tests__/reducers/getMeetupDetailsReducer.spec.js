import { getMeetupDetailsReducer, initialState } from '../../reducers/getMeetupDetailsReducer';
import { GET_MEETUP_DETAILS_BEGIN, GET_MEETUP_DETAILS_SUCCESS, GET_MEETUP_DETAILS_FAILURE } from '../../actionTypes';

describe('get meetup details reducer', () => {
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
    expect(getMeetupDetailsReducer(undefined, { type: '@@INIT' })).toEqual(
      initialState
    );
  });
  it('should return right state for begin', () => {
    expect(getMeetupDetailsReducer(initialState, {
      type: GET_MEETUP_DETAILS_BEGIN,
    })).toEqual({
      isLoading: true
    });
  });
  it('should return right state for success', () => {
    expect(getMeetupDetailsReducer(initialState, {
      type: GET_MEETUP_DETAILS_SUCCESS,
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
    expect(getMeetupDetailsReducer(initialState, {
      type: GET_MEETUP_DETAILS_FAILURE,
      payload: payloadFailure
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure',
      data: []
    });
  });
});
