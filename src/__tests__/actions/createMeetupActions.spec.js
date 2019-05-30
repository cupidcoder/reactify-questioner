import { CREATE_MEETUP_BEGIN, CREATE_MEETUP_SUCCESS, CREATE_MEETUP_FAILURE } from '../../actionTypes';

import {
  handleCreateMeetupBegin,
  handleCreateMeetupSuccess,
  handleCreateMeetupFailure
} from '../../actions/createMeetupActions';

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
