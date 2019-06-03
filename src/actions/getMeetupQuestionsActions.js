import axios from '../config/axiosConfig';
import {
  GET_QUESTIONS_BEGIN,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE
} from '../actionTypes';

export const handleGetQuestionsBegin = () => ({
  type: GET_QUESTIONS_BEGIN
});

export const handleGetQuestionsSuccess = payload => ({
  type: GET_QUESTIONS_SUCCESS,
  payload
});

export const handleGetQuestionsFailure = payload => ({
  type: GET_QUESTIONS_FAILURE,
  payload
});

/**
 * Makes API call to get meetup questions
 * @param {integer} meetupId
 */
export const getMeetupQuestionsRequest = meetupId => async (dispatch) => {
  dispatch(handleGetQuestionsBegin());
  try {
    const response = await axios.get(`/meetups/${meetupId}/questions`);
    return dispatch(handleGetQuestionsSuccess(response.data));
  } catch (error) {
    return dispatch(handleGetQuestionsFailure(error.response.data));
  }
};
