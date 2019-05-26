import { INCREMENT, DECREMENT } from '../actionTypes';

export const initialState = {
  count: 0
};

export const testReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};
