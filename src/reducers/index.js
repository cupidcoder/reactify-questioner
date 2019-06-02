import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { getMeetupsReducer } from './getMeetupsReducer';
import { createMeetupReducer } from './createMeetupReducer';
import { getMeetupDetailsReducer } from './getMeetupDetailsReducer';


const Reducer = combineReducers({
  auth: authReducer,
  getMeetups: getMeetupsReducer,
  createMeetup: createMeetupReducer,
  meetupDetails: getMeetupDetailsReducer
});

export default Reducer;
