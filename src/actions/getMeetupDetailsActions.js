import axios from '../config/axiosConfig';
import {
  GET_MEETUP_DETAILS_BEGIN,
  GET_MEETUP_DETAILS_SUCCESS,
  GET_MEETUP_DETAILS_FAILURE
} from '../actionTypes';

export const handleGetMeetupDetailsBegin = () => ({
  type: GET_MEETUP_DETAILS_BEGIN
});

/**
 * Dispatches success payload
 * @param {object} payload
 */
export const handleGetMeetupDetailsSuccess = payload => ({
  type: GET_MEETUP_DETAILS_SUCCESS,
  payload
});

/**
 * Dispatches failure payload
 * @param {object} payload
 */
export const handleGetMeetupDetailsFailure = payload => ({
  type: GET_MEETUP_DETAILS_FAILURE,
  payload
});

/**
 * Makes API call to get meetup details
 * @param {integer} meetupId
 */
export const getMeetupDetailsRequest = meetupId => async (dispatch) => {
  dispatch(handleGetMeetupDetailsBegin());
  try {
    const response = await axios.get(`/meetups/${meetupId}`);
    return dispatch(handleGetMeetupDetailsSuccess(response.data));
  } catch (error) {
    return dispatch(handleGetMeetupDetailsFailure(error.response.data));
  }
};
