import { GET_MEETUPS_BEGIN, GET_MEETUPS_SUCCESS, GET_MEETUPS_FAILURE } from '../actionTypes';

export const initialState = {
  isLoading: false,
  status: '',
  message: '',
  data: []
};

export const getMeetupsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_MEETUPS_BEGIN:
      return {
        isLoading: true
      };
    case GET_MEETUPS_SUCCESS:
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data
      };
    case GET_MEETUPS_FAILURE:
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
