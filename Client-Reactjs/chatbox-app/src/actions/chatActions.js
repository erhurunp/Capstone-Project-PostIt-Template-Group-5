import {
  ADD_CHAT,
  GET_CHAT,
  CLEAR_FIELD,
  SELETED_GROUP_CHAT,
} from '../actions/types';
export const getChat = () => {
  return {
    type: GET_CHAT,
  };
};
export const clearField = () => {
  return {
    type: CLEAR_FIELD,
  };
};

export const getGroupMessages = (messages) => {
  return {
    type: SELETED_GROUP_CHAT,
    payload: messages,
  };
};

export const addChat = (chat) => {
  return {
    type: ADD_CHAT,
    payload: chat,
  };
};
