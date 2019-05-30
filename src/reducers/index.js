import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { getMeetupsReducer } from './getMeetupsReducer';


const Reducer = combineReducers({
  auth: authReducer,
  getMeetups: getMeetupsReducer
});

export default Reducer;
