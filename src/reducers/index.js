import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { getMeetupsReducer } from './getMeetupsReducer';
import { createMeetupReducer } from './createMeetupReducer';


const Reducer = combineReducers({
  auth: authReducer,
  getMeetups: getMeetupsReducer,
  createMeetup: createMeetupReducer
});

export default Reducer;
