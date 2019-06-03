import { POST_QUESTION_BEGIN, POST_QUESTION_SUCCESS, POST_QUESTION_FAILURE } from '../actionTypes';

export const initialState = {
  isLoading: false,
  status: '',
  message: '',
  data: []
};

export const postQuestionReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case POST_QUESTION_BEGIN:
      return {
        isLoading: true
      };
    case POST_QUESTION_SUCCESS:
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data
      };
    case POST_QUESTION_FAILURE:
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.error,
        data: []
      };
    default:
      return state;
  }
};
