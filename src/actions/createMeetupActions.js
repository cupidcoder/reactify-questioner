import {
  CREATE_MEETUP_BEGIN,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE
} from '../actionTypes';
import axios from '../config/axiosConfig';

/**
 * dispatches the create admin loading state
 */
export const handleCreateMeetupBegin = () => ({
  type: CREATE_MEETUP_BEGIN
});

/**
 * dispatches successful create meetup action
 * @param {object} payload response from the api
 */
export const handleCreateMeetupSuccess = payload => ({
  type: CREATE_MEETUP_SUCCESS,
  payload
});

/**
 * dispatches failure create meetup action
 * @param {object} payload response from the api
 */
export const handleCreateMeetupFailure = payload => ({
  type: CREATE_MEETUP_FAILURE,
  payload
});

/**
 * Makes call to create meetup endpoint
 * @param {object} meetupObject meetup information
 */
export const processCreateMeetup = meetupObject => async (dispatch) => {
  dispatch(handleCreateMeetupBegin());
  try {
    const response = await axios.post('/meetups', meetupObject);
    return dispatch(handleCreateMeetupSuccess(response.data));
  } catch (error) {
    return dispatch(handleCreateMeetupFailure(error.response.data));
  }
};
