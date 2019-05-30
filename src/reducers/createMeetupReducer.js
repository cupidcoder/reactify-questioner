import { CREATE_MEETUP_BEGIN, CREATE_MEETUP_SUCCESS, CREATE_MEETUP_FAILURE } from '../actionTypes';

export const initialState = {
  isLoading: false,
  status: '',
  message: '',
  data: []
};

export const createMeetupReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case CREATE_MEETUP_BEGIN:
      return {
        isLoading: true
      };
    case CREATE_MEETUP_SUCCESS:
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        data: action.payload.data
      };
    case CREATE_MEETUP_FAILURE:
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
