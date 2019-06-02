import {
  GET_MEETUP_DETAILS_BEGIN,
  GET_MEETUP_DETAILS_SUCCESS,
  GET_MEETUP_DETAILS_FAILURE
} from '../actionTypes';

export const initialState = {
  isLoading: false,
  status: '',
  message: '',
  data: []
};

export const getMeetupDetailsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_MEETUP_DETAILS_BEGIN:
      return {
        isLoading: true
      };
    case GET_MEETUP_DETAILS_SUCCESS:
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data[0]
      };
    case GET_MEETUP_DETAILS_FAILURE:
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
