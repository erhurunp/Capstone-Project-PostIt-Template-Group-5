import { combineReducers } from 'redux';
import groupReducer from './GroupReducer';
import chatReducer from './ChatReducer';
import userReducer from './UserReducer';

export default combineReducers({
  group: groupReducer,
  chat: chatReducer,
  user: userReducer,
});
