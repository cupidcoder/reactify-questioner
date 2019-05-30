import {
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_BEGIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE
} from '../actionTypes';

export const initialState = {
  isLoading: false,
  status: '',
  message: '',
};

export const authReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SIGNUP_BEGIN:
      return {
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data[0]
      };
    case SIGNUP_FAILURE:
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.error,
        data: []
      };
    case SIGNIN_BEGIN:
      return {
        isLoading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data[0]
      };
    case SIGNIN_FAILURE:
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
