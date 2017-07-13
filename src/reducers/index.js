import { combineReducers } from 'redux-immutable';
import UserReducer from './reducer_user'
import TweetReducer from './reducer_tweet'
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users:UserReducer,
  tweets:TweetReducer,
  form:formReducer
});

export default rootReducer;
