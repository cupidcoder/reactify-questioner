import { combineReducers } from 'redux';

import { testReducer } from './testReducer';


const Reducer = combineReducers({
  test: testReducer
});

export default Reducer;
