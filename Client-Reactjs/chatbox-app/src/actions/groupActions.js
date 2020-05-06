import {
  ADD_GROUP,
  GET_GROUPS,
  DELETE_GROUP,
  FILTER_GROUP,
  SELETED_GROUP,
} from '../actions/types';
export const getGroups = () => {
  return {
    type: GET_GROUPS,
  };
};
export const getGroupMessages = (messages) => {
  return {
    type: SELETED_GROUP,
    payload: messages,
  };
};

export const deleteGroup = (id) => {
  return {
    type: DELETE_GROUP,
    payload: id,
  };
};

export const addGroup = (group) => {
  return {
    type: ADD_GROUP,
    payload: group,
  };
};

export const filterGroup = (text) => {
  return {
    type: FILTER_GROUP,
    payload: text,
  };
};
