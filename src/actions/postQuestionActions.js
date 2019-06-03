import axios from '../config/axiosConfig';
import {
  POST_QUESTION_BEGIN,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_FAILURE
} from '../actionTypes';

export const handlePostQuestionBegin = () => ({
  type: POST_QUESTION_BEGIN
});

export const handlePostQuestionSuccess = payload => ({
  type: POST_QUESTION_SUCCESS,
  payload
});

export const handlePostQuestionFailure = payload => ({
  type: POST_QUESTION_FAILURE,
  payload
});

/**
 * Makes API call to post question to meetup
 * @param {object} questionObject
 */
export const postQuestionRequest = questionObject => async (dispatch) => {
  dispatch(handlePostQuestionBegin());
  try {
    const response = await axios.post('/questions', questionObject);
    return dispatch(handlePostQuestionSuccess(response.data));
  } catch (error) {
    return dispatch(handlePostQuestionFailure(error.response.data));
  }
};
