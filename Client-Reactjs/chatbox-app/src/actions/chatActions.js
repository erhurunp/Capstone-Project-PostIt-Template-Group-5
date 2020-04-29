import { ADD_CHAT, GET_CHAT, CLEAR_FIELD } from '../actions/types';
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

export const addChat = (chat) => {
  return {
    type: ADD_CHAT,
    payload: chat,
  };
};
