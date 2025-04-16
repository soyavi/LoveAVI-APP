import {combineReducers} from 'redux';
import auth from './auth';
import display from './display';
import conversation from './conversation';

export default combineReducers({
  auth,
  display,
  conversation,
});
