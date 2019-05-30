import {
  CREATE_MEETUP_BEGIN,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE
} from '../../actionTypes';

import { createMeetupReducer, initialState } from '../../reducers/createMeetupReducer';

describe('Auth reducer', () => {
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
    expect(createMeetupReducer(undefined, { type: '@@INIT' })).toEqual(
      initialState
    );
  });
  it('should return right state for begin', () => {
    expect(createMeetupReducer(initialState, {
      type: CREATE_MEETUP_BEGIN,
    })).toEqual({
      isLoading: true
    });
  });
  it('should return right state for success', () => {
    expect(createMeetupReducer(initialState, {
      type: CREATE_MEETUP_SUCCESS,
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
    expect(createMeetupReducer(initialState, {
      type: CREATE_MEETUP_FAILURE,
      payload: payloadFailure
    })).toEqual({
      isLoading: false,
      status: 400,
      message: 'Failure',
      data: []
    });
  });
});
