import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { getMeetupsReducer } from './getMeetupsReducer';
import { createMeetupReducer } from './createMeetupReducer';
import { getMeetupDetailsReducer } from './getMeetupDetailsReducer';
import { getMeetupQuestionsReducer } from './getQuestionsReducer';
import { postQuestionReducer } from './postQuestionReducer';


const Reducer = combineReducers({
  auth: authReducer,
  getMeetups: getMeetupsReducer,
  createMeetup: createMeetupReducer,
  meetupDetails: getMeetupDetailsReducer,
  meetupQuestions: getMeetupQuestionsReducer,
  postQuestion: postQuestionReducer
});

export default Reducer;
