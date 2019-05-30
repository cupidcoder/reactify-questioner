import { getMeetupsReducer, initialState } from '../../reducers/getMeetupsReducer';
import { GET_MEETUPS_BEGIN, GET_MEETUPS_SUCCESS, GET_MEETUPS_FAILURE } from '../../actionTypes';

describe('get meetups reducer', () => {
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
    expect(getMeetupsReducer(undefined, { type: '@@INIT' })).toEqual(
      initialState
    );
  });
  it('should return right state for begin', () => {
    expect(getMeetupsReducer(initialState, {
      type: GET_MEETUPS_BEGIN,
    })).toEqual({
      isLoading: true
    });
  });
  it('should return right state for success', () => {
    expect(getMeetupsReducer(initialState, {
      type: GET_MEETUPS_SUCCESS,
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
    expect(getMeetupsReducer(initialState, {
      type: GET_MEETUPS_FAILURE,
      payload: payloadFailure
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure',
      data: []
    });
  });
});
