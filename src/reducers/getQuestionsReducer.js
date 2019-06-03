import { GET_QUESTIONS_BEGIN, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE } from '../actionTypes';

export const initialState = {
  isLoading: false,
  status: '',
  message: '',
  data: []
};

export const getMeetupQuestionsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_QUESTIONS_BEGIN:
      return {
        isLoading: true
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data
      };
    case GET_QUESTIONS_FAILURE:
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
