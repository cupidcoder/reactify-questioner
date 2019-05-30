import { GET_MEETUPS_BEGIN, GET_MEETUPS_SUCCESS, GET_MEETUPS_FAILURE } from '../../actionTypes';

import {
  handleGetMeetupBegin,
  handleGetMeetupSuccess,
  handleGetMeetupFailure
} from '../../actions/getMeetupActions';

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
