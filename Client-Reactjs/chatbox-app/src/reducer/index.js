import { combineReducers } from 'redux';
import groupReducer from './GroupReducer';
import chatReducer from './ChatReducer';

export default combineReducers({
  group: groupReducer,
  chat: chatReducer,
});
