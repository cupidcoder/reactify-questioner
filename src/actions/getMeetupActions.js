import axios from '../config/axiosConfig';
import { GET_MEETUPS_BEGIN, GET_MEETUPS_SUCCESS, GET_MEETUPS_FAILURE } from '../actionTypes';


/**
 * Dispatch get meetups begin action
 */
export const handleGetMeetupBegin = () => ({
  type: GET_MEETUPS_BEGIN
});

/**
 * Dispatch get meetups success action
 * @param {object} response from backend
 */
export const handleGetMeetupSuccess = payload => ({
  type: GET_MEETUPS_SUCCESS,
  payload
});

/**
 * Dispatch get meetups failure action
 * @param {object} response from backend
 */
export const handleGetMeetupFailure = payload => ({
  type: GET_MEETUPS_FAILURE,
  payload
});

/**
 * Makes call to get meetups
 */
export const processGetMeetups = () => async (dispatch) => {
  dispatch(handleGetMeetupBegin());
  try {
    const response = await axios.get('/meetups');
    return dispatch(handleGetMeetupSuccess(response.data));
  } catch (error) {
    return dispatch(handleGetMeetupFailure(error.response.data));
  }
};
